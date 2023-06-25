import {Component, Inject, Input} from '@angular/core';
import {Character} from "../../model/character.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public character: Character) {
    console.log(character)
  }
}
