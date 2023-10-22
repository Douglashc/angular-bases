import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid'

import { CharacterInterface } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})

export class DbzService {

    public character: CharacterInterface[] = [
        { id: uuid(), name: 'krillin', power: 1000 },
        { id: uuid(), name: 'Goku', power: 9500 },
        { id: uuid(), name: 'Vegueta', power: 12000 }
    ];

    onNewCharacter(character: CharacterInterface) : void 
    {
        const newCharacter: CharacterInterface = { 
            id: uuid(), ...character 
        };

        this.character.push(newCharacter);
    }

    /*indexCharacter(index: number) : void {
        this.character.splice(index, 1);
    }*/

    onDeleteCharacterById(id?: string) : void {
        console.log(id);
        this.character = this.character.filter( data => data.id !== id );
    }
}