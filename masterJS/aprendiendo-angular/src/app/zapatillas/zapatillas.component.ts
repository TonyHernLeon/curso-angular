import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatillas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'zapatillas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent {

  public titulo: String = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;

  constructor(){
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
      new Zapatilla('Adidas Yeezy', 'Adidas', 'gris', 180, false)
    ];
  }

  ngOnInit(){
    console.log(this.zapatillas);
  }
}
