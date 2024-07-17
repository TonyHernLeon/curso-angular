import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Imports generados
import { Configuracion } from './models/configuration';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public title = 'Master de JavaScript y Angular';
 public descripcion: String;
 public config;

 constructor (){
    this.title =  Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
 }
}
