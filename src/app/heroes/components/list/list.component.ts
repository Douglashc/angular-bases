import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public heroName: string[] = ['Iron man', 'Spider man', 'Hulk', 'Thor', 'Loky']; 
  public deleteHero?: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  deleteLasteHero(){
    this.deleteHero = this.heroName.pop();
  }

}
