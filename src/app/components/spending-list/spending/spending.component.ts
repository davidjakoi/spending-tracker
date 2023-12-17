import { DatePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { Currency } from "../../../models/spending.model";
import { CurrencyEnum } from "../../../models/currency.enum";

@Component({
  selector: "spending",
  standalone: true,
  templateUrl: "./spending.component.html",
  imports: [MatCardModule, MatIconModule, DatePipe],
  styleUrl: "./spending.component.css"
})
export class SpendingComponent {
  @Input() amount: number = 0;
  @Input() currency: Currency = null;
  @Input() description: string = "";
  @Input() spent_at: string = "";

  getAmountInCurrency = () => (this.currency === CurrencyEnum.HUF ? `${this.amount} Ft` : `$${this.amount}`);
}
