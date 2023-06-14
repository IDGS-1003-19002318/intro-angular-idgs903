import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'intro-angular-idgs903';

    grupo = 'IDGS903';

    alumnos = {
        matricula: 19002318,
        nombre: 'Joshua',
        fechaNacimiento: new Date(2001, 6, 10),
        pago: 123.45,
    }

    duplicarN(valor: number): number {
        return valor * 2;
    }
}
