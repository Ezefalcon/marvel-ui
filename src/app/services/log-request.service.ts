import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterData} from "../model/character.model";
import {Page} from "../model/page.model";
import {LogRequest} from "../model/log-request.model";

@Injectable({
  providedIn: 'root'
})
export class LogRequestService {

  constructor(private http: HttpClient) { }

  getLogs(page: number = 0, limit: number = 20): Observable<Page<LogRequest>> {
    return this.http.get(`http://localhost:8080/api/log?page=${page}&limit=${limit}`) as Observable<Page<LogRequest>>;
  }
}
