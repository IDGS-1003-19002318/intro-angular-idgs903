import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//Propio
import { OperasModule } from './utl/formularios/operas/operas.module';

import { AppComponent } from './app.component';
import { IdgsComponent } from './utl/idgs.component';
import { IevnnComponent } from './utl/ievn.component';
import { IevnComponent } from './utl/ievn/ievn.component';
import { SumaComponent } from './utl/formularios/suma/suma.component';


@NgModule({
  declarations: [
    AppComponent,
    IdgsComponent,
    IevnnComponent,
    IevnComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
