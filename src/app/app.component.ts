import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SpendingListComponent } from "./components/spending-list/spending-list.component";
import { SpendingFormComponent } from "./components/spending-form/spending-form.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, SpendingFormComponent, SpendingListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {}
