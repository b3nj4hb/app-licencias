import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tipo_documento } from '../classes/classes';

@Injectable({
    providedIn: 'root'
})

export class tipoDocumentoService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private url: string = 'https://app-licencias.herokuapp.com/api/auth'
    constructor(private http: HttpClient, private router: Router) { }

    list(): Observable<tipo_documento[]> {
        return this.http.get<tipo_documento[]>(this.url + '/tipo_documento');
    }
}