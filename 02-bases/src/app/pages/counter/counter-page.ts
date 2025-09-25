import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: 'counter-page',
  templateUrl: './counter-page.html',
  styles: `
    button {
      padding: 10px;
      margin: 5px 10px;
      width: 75px;
    }
  `
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor() { }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update(current => current - value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
