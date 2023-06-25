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
  showLoader: boolean = false;

  constructor(private marvelService: MarvelServiceService) {}

  ngOnInit(): void {
    this.showLoader = true
    this.marvelService.getCharacters().subscribe({
      next: value => this.characterData = value,
      complete: () => this.showLoader = false
    })
  }

  onScroll() {
    this.showLoader = true
    this.marvelService.getCharacters(this.characterData.offset + 20, 20).subscribe({
      next: value =>  {
        this.characterData = {
          ...value,
          results: this.characterData.results.concat(value.results)
        }
      },
      complete: () => this.showLoader = false
    })
  }

}
