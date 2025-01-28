import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,

  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  readonly NOMBRE_INICIAL: string = 'Ironman'
  readonly EDAD_INICIAL: number = 49;


  public name: string = this.NOMBRE_INICIAL;
  public edad: number = this.EDAD_INICIAL;

  get capitalazedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.edad}`;
  }

  changeHero(): void {
    this.name = 'Superman';
  }

  changeEdad(): void{
    this.edad = 33;
  }

  resetForm(): void {
    this.name = this.NOMBRE_INICIAL;
    this.edad = this.EDAD_INICIAL;
  }
}
