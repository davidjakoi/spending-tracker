import { Component } from "@angular/core";
import { SpendingComponent } from "./spending/spending.component";
import { CommonModule } from "@angular/common";
import { AppState } from "../../store/app.state";
import { Store } from "@ngrx/store";
import { spendingsState } from "../../store/selector/app.selector";

@Component({
  selector: "spending-list",
  standalone: true,
  imports: [CommonModule, SpendingComponent],
  templateUrl: "./spending-list.component.html",
  styleUrl: "./spending-list.component.css"
})
export class SpendingListComponent {
  constructor(private store: Store<AppState>) {}

  spendings$ = this.store.select(spendingsState);
}
