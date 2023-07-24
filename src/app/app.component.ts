import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //llaves porque es un arreglo de estilos
})
export class AppComponent {
  public title: string = 'Mi primera app de angular';
}
