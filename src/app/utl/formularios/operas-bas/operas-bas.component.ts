import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css'],
})
export class OperasBasComponent {

  num1!: number;
  num2!: number;
  resultado!: number;
  operaSelect: string = 'suma';

  tipoOperacion: string[] = ['suma', 'resta', 'multiplicacion', 'division'];

  constructor() { }

  suma(): number {
    return this.num1 + this.num2;
  }

  resta(): number {
    return this.num1 - this.num2;
  }

  multiplicacion(): number {
    return this.num1 * this.num2;
  }

  division(): number {
    return this.num1 / this.num2;
  }

  calcular(): void {
    switch (this.operaSelect) {
      case 'suma':
        this.resultado = this.suma();
        break;
      case 'resta':
        this.resultado = this.resta();
        break;
      case 'multiplicacion':
        this.resultado = this.multiplicacion();
        break;
      case 'division':
        this.resultado = this.division();
        break;
      default:
        this.resultado = 0;
        break;
    }
  }

}
