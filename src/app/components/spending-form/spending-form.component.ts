import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import { OrderEnum } from "../../models/order.enum";
import { Order, SpendingParamsModel } from "../../models/spending-params.model";
import { Currency, SpendingModel } from "../../models/spending.model";
import { addSpending, addSpendings } from "../../store/action/app.action";
import { AppState } from "../../store/app.state";
import { SpendingServiceService } from "./services/spending-service.service";

@Component({
  selector: "spending-form",
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatButtonToggleModule],
  templateUrl: "./spending-form.component.html",
  styleUrl: "./spending-form.component.css"
})
export class SpendingFormComponent implements OnInit {
  constructor(private store: Store<AppState>, private readonly spendingServiceService: SpendingServiceService) {}

  newSpendingForm = new FormGroup({
    amount: new FormControl<number | null>(null, Validators.required),
    currency: new FormControl<Currency>(null, Validators.required),
    description: new FormControl<string>("", Validators.required)
  });

  sortAndFilterForm = new FormGroup({
    order: new FormControl<Order>(OrderEnum.SpentAtDescending),
    currency: new FormControl<Currency>(null)
  });

  ngOnInit() {
    this.getSpendingsAndStoreThem(this.sortAndFilterForm.value);
    this.sortAndFilterForm.valueChanges.subscribe((formValue) => {
      this.getSpendingsAndStoreThem(formValue);
    });
  }

  getSpendingsAndStoreThem = (formValue?: SpendingParamsModel) => {
    this.spendingServiceService
      .getSpendings({ ...formValue })
      .pipe(take(1))
      .subscribe((spendingArray) => this.store.dispatch(addSpendings({ spendings: spendingArray })));
  };

  submitForm = () => {
    this.newSpendingForm.markAllAsTouched();
    if (this.newSpendingForm.valid) {
      this.spendingServiceService.addSpending({ ...this.newSpendingForm.value, spent_at: new Date().toISOString() } as SpendingModel).subscribe((spendingValue) => {
        this.store.dispatch(addSpending({ spending: spendingValue }));
        this.newSpendingForm.reset({ amount: null, currency: null, description: "" });
        /* this.newSpendingForm.updateValueAndValidity();
        this.newSpendingForm.markAsPristine();
        this.newSpendingForm.markAsUntouched(); */
      });
    }
  };
}
