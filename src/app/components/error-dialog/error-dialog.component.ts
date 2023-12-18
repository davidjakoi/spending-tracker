import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: "error-dialog",
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: "./error-dialog.component.html",
  styleUrl: "./error-dialog.component.css"
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
