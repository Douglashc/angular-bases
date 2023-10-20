import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public name: string = 'iron man';
  public age: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  get getName() : string {
    return this.name.toUpperCase();
  }

  informationHero() : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() : void{
    this.name = 'spider man';
  }

  changeAge() : void{
    this.age = 25;
  }

  reset() : void{
    this.name = 'iron man';
    this.age = 45;
  }

}
