import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, take } from "rxjs";
import { SpendingParamsModel } from "../../../models/spending-params.model";
import { SpendingModel } from "../../../models/spending.model";

@Injectable({
  providedIn: "root"
})
export class SpendingServiceService {
  constructor(private readonly httpClient: HttpClient) {}

  addSpending = (body: SpendingModel): Observable<SpendingModel> =>
    this.httpClient
      .post(`https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/`, body, {
        observe: "response",
        responseType: "json"
      })
      .pipe(
        take(1),
        map((response) => response.body as SpendingModel)
      );

  getSpendings = (params?: SpendingParamsModel): Observable<SpendingModel[]> => {
    let queryParams = new HttpParams();
    if (params) {
      queryParams = queryParams.set("currency", !!params.currency && params.currency);
      queryParams = queryParams.set("order", !!params.order && params.order);
    }
    return this.httpClient.get(`https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/`, { params: queryParams }).pipe(
      take(1),
      map((response) => response as SpendingModel[])
    );
  };
}
