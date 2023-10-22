import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPagesComponent } from './pages/main-pages.component';
import { ListComponent } from './componentes/list/list.component';
import { AddCharacterComponent } from './componentes/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPagesComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    MainPagesComponent
  ]
})
export class DbzModule { }
