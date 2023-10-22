import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  public characterList: CharacterInterface[] = [
    { name: 'Trunks', power: 10 }
  ];

  @Output()
  //public indexCharacter: EventEmitter<number> = new EventEmitter();
  public idCharacter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /*onDeleteCharacter(index: number) : void {
    this.indexCharacter.emit(index);
  }*/
  onDeleteCharacter(id?: string) : void {
    this.idCharacter.emit(id);
  } 

}
