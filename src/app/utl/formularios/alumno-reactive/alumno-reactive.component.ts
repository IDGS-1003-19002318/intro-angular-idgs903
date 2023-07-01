import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IAlumnos } from '../../alumnos';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent implements OnInit {

  alumnoForm!: FormGroup;
  alumnos: IAlumnos[] = [];

  constructor(private readonly formBuilder: FormBuilder) {
    this.alumnoForm = this.initForm();
  }

  ngOnInit(): void { }

  initForm(): FormGroup {
    return this.formBuilder.group({
      matricula: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: [''],
      correo: [''],
      pago: [''],
      foto: [''],
      calif: [''],
    });
  }

  onSubmit(): void {
    console.log('entra');
    console.log(`Formulario enviado ${this.alumnoForm.value}`);
    this.obtenerValores();
  }

  obtenerValores(): void {
    const { matricula, nombre, edad, correo, pago, foto, calif } = this.alumnoForm.value;
    let alumno: IAlumnos = {
      matricula: matricula,
      nombre: nombre,
      edad: edad,
      correo: correo,
      pago: pago,
      foto: foto,
      calificacion: calif
    };
    this.alumnos.push(alumno);
  }

}
