import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SpendingListModule } from "./components/spending-list/spending-list.module";
import { CommonModule } from "@angular/common";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  imports: [
    BrowserModule,
    SpendingListModule,
    CommonModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
