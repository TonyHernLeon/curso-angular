import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy()">+1</button>
  <button (click)="resetBy()">Reset</button>
  <button (click)="reduceBy()">-1</button>
  <hr />
  <h3>Botones con metodo con parametro</h3>
  <button (click)="increaseBy2(1)">+1</button>
  <button (click)="resetBy()">Reset</button>
  <button (click)="increaseBy2(-1)">-1</button>`,
  standalone: false
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(): void{
    this.counter += 1;
  }

  reduceBy(): void{
    this.counter--;
  }

  //Otra forma
  increaseBy2(value: number): void{
    this.counter += value;
  }

  resetBy(): void{
    //La forma que el tiene es coger el valor del principio, tonto de mi
    this.counter = 10;
  }
}
