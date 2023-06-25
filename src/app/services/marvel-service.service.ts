import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {CharacterData} from "../model/character.model";

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  constructor(private http: HttpClient) { }

  getCharacters(offset: number = 0, limit: number = 20) {
    return this.http.get(`http://localhost:8080/api/character?offset=${offset}&limit=${limit}`) as Observable<CharacterData>;
  }

}
