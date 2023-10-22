import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {

  @Output()
  public onNewCharacter: EventEmitter<CharacterInterface> = new EventEmitter();

  public character: CharacterInterface = {
    name: '',
    power: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  emitCharacter() : void
  {
    if(!this.character.name) return;
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  } 

}
