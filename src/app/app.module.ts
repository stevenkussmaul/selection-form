import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionFormComponent } from './components/selection-form/selection-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubForm1Component } from './components/selection-form/sub-form1/sub-form1.component';
import { SubForm2Component } from './components/selection-form/sub-form2/sub-form2.component';
import { SubForm3Component } from './components/selection-form/sub-form3/sub-form3.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionFormComponent,
    SubForm1Component,
    SubForm2Component,
    SubForm3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
