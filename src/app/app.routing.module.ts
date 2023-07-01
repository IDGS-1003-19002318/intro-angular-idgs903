// import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IevnComponent } from "./utl/ievn/ievn.component";
import { AlumnoReactiveComponent } from "./utl/formularios/alumno-reactive/alumno-reactive.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    // loadChildren: () => import('./utl/utl.module').then(m => m.UtlModule)
  },
  {
    path: 'IEVN',
    component: IevnComponent
    // loadChildren: () => import('./ievn/ievn.module').then(m => m.IevnModule)
    // loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
  {
    path: 'Formulario',
    component: AlumnoReactiveComponent
    // loadChildren: () => import('./ievn/ievn.module').then(m => m.IevnModule)
    // loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
  /* {
    path: '**',
    // component: ErrorComponent
  } */

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

