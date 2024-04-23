import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(counter)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decrementBy(counter)">-1</button>
  `
})
export class CounterComponent {
    public counter: number = 10;

    increaseBy( value: number):void{
      this.counter +=1;
    }
    decrementBy (value: number): void{
      this.counter -=1;
    }
    resetCounter(){
      this.counter = 10;
    }
}
