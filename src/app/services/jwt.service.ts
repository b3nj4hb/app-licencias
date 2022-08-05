import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { usuario, validarUsuario } from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url: string = 'https://app-licencias.herokuapp.com/api/auth/'
  // private url: string = 'http://localhost:3000/api/auth'
  constructor(private http: HttpClient, private router: Router) { }

  login(post: validarUsuario): Observable<any> {
    // return this.http.post<any>(this.url + '/', post)
    return this.http.post<any>(this.url + '/', post)
  }
  registrar(post: usuario): Observable<any> {
    return this.http.post<any>(this.url + '/registrar', post)
  }
}
