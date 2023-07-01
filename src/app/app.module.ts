import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Propio
import { OperasModule } from './utl/formularios/operas/operas.module';
import { AppRoutingModule } from './app.routing.module';

import { AlumnosFilterPipe } from './utl/alumnos-filter.pipe';

import { AppComponent } from './app.component';
// import { IdgsComponent } from './utl/idgs.component';
// import { IevnnComponent } from './utl/ievn.component';
import { IevnComponent } from './utl/ievn/ievn.component';
// import { SumaComponent } from './utl/formularios/suma/suma.component';
import { MenuComponent } from './utl/menu/menu.component';
import { AlumnoReactiveComponent } from './utl/formularios/alumno-reactive/alumno-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    // IdgsComponent,
    // IevnnComponent,
    IevnComponent,
    // SumaComponent,
    MenuComponent,
    AlumnoReactiveComponent,
    AlumnosFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OperasModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
