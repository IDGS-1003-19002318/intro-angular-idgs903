import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IdgsComponent } from './utl/idgs.component';
import { IevnnComponent } from './utl/ievn.component';
import { IevnComponent } from './utl/ievn/ievn.component';

@NgModule({
  declarations: [
    AppComponent,
    IdgsComponent,
    IevnnComponent,
    IevnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
