import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any[]> {
    return this.http.get('http://localhost:8080/api/character') as Observable<any[]>;
  }

}
