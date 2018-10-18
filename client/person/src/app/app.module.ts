import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PeoplelistComponent } from "./peoplelist/peoplelist.component";

@NgModule({
  declarations: [AppComponent, PeoplelistComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  exports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
