import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SpendingListComponent } from "./spending-list.component";
import { SpendingComponent } from "./spending/spending.component";
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [SpendingListComponent]
})
export class SpendingListModule {}
