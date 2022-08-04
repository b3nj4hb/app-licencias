import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { usuario } from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url: string = 'https://app-licencias.herokuapp.com/api/auth'
  constructor(private http: HttpClient, private router: Router) { }

  list(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.url + '/usuario');
  }
}
