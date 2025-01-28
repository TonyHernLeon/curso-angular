import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  readonly HEROES_NAMES: string[] = ['Spiderman', 'Hulk', 'Ironman','Thor','The Punisher', 'Daredevil'];
  public heroesNames: string[] = this.HEROES_NAMES;
  public deletedHero?: string;

  removeLastHero(): void{
    this.deletedHero = this.heroesNames.pop();
  }
}


