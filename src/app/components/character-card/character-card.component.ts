import {Component, Input} from '@angular/core';
import {Character} from "../../model/character.model";
import {MatDialog} from "@angular/material/dialog";
import {CharacterDetailComponent} from "../character-detail/character-detail.component";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  @Input() character: Character;

  constructor(private dialog: MatDialog) {
  }

  showDetails() {
    const dialogRef = this.dialog.open(CharacterDetailComponent, {
      data: this.character,
    });
  }
}
