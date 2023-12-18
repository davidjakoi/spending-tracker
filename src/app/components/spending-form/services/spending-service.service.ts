import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, take, throwError } from "rxjs";
import { SpendingParamsModel } from "../../../models/spending-params.model";
import { SpendingModel } from "../../../models/spending.model";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from "../../error-dialog/error-dialog.component";

@Injectable({
  providedIn: "root"
})
export class SpendingServiceService {
  constructor(public dialog: MatDialog, private readonly httpClient: HttpClient) {}

  spendingUrl = "https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/";

  addSpending = (body: SpendingModel): Observable<SpendingModel> =>
    this.httpClient
      .post(this.spendingUrl, body, {
        observe: "response",
        responseType: "json"
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.dialog.open(ErrorDialogComponent, { data: "Error occured during saving your spending, please try again!" });
          return throwError(() => error);
        }),
        take(1),
        map((response) => response.body as SpendingModel)
      );

  getSpendings = (params?: SpendingParamsModel): Observable<SpendingModel[]> => {
    let queryParams = new HttpParams();
    if (params) {
      queryParams = queryParams.set("currency", !!params.currency && params.currency);
      queryParams = queryParams.set("order", !!params.order && params.order);
    }
    return this.httpClient.get(this.spendingUrl, { params: queryParams }).pipe(
      catchError((error: HttpErrorResponse) => {
        this.dialog.open(ErrorDialogComponent, { data: "Error occured during getting spendings, please try again!" });
        return throwError(() => error);
      }),
      take(1),
      map((response) => response as SpendingModel[])
    );
  };
}
