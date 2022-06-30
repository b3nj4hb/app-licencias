import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { persona } from "../classes/persona";

@Injectable({
    providedIn: 'root'
})

export class personaService {
    httpOptions = {
        Headers: new HttpHeaders({ 'Content-Type': 'applicatoin/json' })
    };
    private url: string = 'https://app-licencias.herokuapp.com/api/auth'
    constructor(private http: HttpClient, private router: Router) { }

    getPersonas(): Observable<persona[]> {
        return this.http.get<persona[]>(this.url + '/persona');
    }
}