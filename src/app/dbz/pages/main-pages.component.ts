import { Component } from "@angular/core";
import { DbzService } from "../services/dbz.service";
import { CharacterInterface } from "../interfaces/character.interface";

@Component({
    selector: 'app-dbz-main-pages',
    templateUrl: './main-pages.component.html'
})
export class MainPagesComponent 
{
    constructor(private dbzService: DbzService) {}

    get character() : CharacterInterface[]{
        return [...this.dbzService.character];
    }

    onDeleteCharacter(id: string) : void {
        this.dbzService.onDeleteCharacterById(id);
    }

    onNewCharacter(character: CharacterInterface) : void {
        this.dbzService.onNewCharacter(character);
    }
}