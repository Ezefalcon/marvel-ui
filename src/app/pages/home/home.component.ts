import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from "../../services/marvel-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: any[] = [];

  constructor(private marvelService: MarvelServiceService) {}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe({
      next: value => this.characters = value,
    })
  }


}
