import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tipo_persona } from '../classes/classes';

@Injectable({
    providedIn: 'root'
})

export class tipoPersonaService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private url: string = 'https://app-licencias.herokuapp.com/api/auth'
    constructor(private http: HttpClient, private router: Router) { }

    list(): Observable<tipo_persona[]> {
        return this.http.get<tipo_persona[]>(this.url + '/tipo_persona');
    }
}