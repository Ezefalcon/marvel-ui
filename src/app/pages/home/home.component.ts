import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from "../../services/marvel-service.service";
import {CharacterData} from "../../model/character.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characterData: CharacterData;

  constructor(private marvelService: MarvelServiceService) {}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe({
      next: value => this.characterData = value,
       complete: () => console.log(this.characterData)
    })
  }


}
