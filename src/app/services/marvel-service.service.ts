import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {CharacterData} from "../model/character.model";

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get('http://localhost:8080/api/character') as Observable<CharacterData>;
  }

}
