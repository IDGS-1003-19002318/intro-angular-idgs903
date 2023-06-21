import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ievn',
  templateUrl: './ievn.component.html',
  styleUrls: ['./ievn.component.css']
})
export class IevnComponent {

  // alumnos: any[] = [];
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImagen: boolean = false;
  listFilter: string = '';

  alumnos: any[] = [
    {
      'matricula': 19002318,
      'nombre': 'Joshua',
      'edad': 21,
      'correo': 'joshmorin417@gmail.com',
      'pago': 123.45,
      'foto': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      "matricula": 20002319,
      'nombre': 'Juan',
      'edad': 19,
      'correo': 'morin@gmail.com',
      'pago': 929.45,
      'foto': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
    },
    {
      "matricula": 18008901,
      'nombre': 'Adrian',
      'edad': 18,
      'correo': 'si@gmail.com',
      'pago': 126.45,
      'foto': 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80'
    }
  ]

  constructor() { }

  showImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }


}
