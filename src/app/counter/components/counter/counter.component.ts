import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ counter }}</h1>

        <button (click)="increase(+1)">+1</button>
        <button (click)="increase(0)">Reset</button>
        <button (click)="increase(-1)" >-1</button>
    `
})
export class CounterComponent {
    public counter: number = 10;

    increase(value: number) {
        (value != 0) ? this.counter += value : this.counter = value;
    }
}