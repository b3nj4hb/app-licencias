import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { localidad, persona_localidad } from '../classes/classes';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url: string = 'https://app-licencias.herokuapp.com/api/auth'
  constructor(private http: HttpClient, private router: Router) { }

  saveLocalidad(post: localidad): Observable<any> {
    return this.http.post<any>(this.url + '/localidad/add', post)
  }
  savePersonaLocalidad(post: persona_localidad): Observable<any> {
    return this.http.post<any>(this.url + '/persona_localidad/add', post)
  }
  retornaridlocalidad(referencia: any, direccion: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/localidad/retornarid/${referencia}/${direccion}`)
  }

}
