import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { distrito, localidad, persona_localidad } from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url: string = 'https://app-licencias.herokuapp.com/api/auth'
  constructor(private http: HttpClient, private router: Router) { }

  list(): Observable<distrito[]> {
    return this.http.get<distrito[]>(this.url + '/distrito');
  }

}