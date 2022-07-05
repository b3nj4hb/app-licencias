import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { provincia } from '../classes/classes';

@Injectable({
    providedIn: 'root'
})

export class provinciaService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private url: string = 'https://app-licencias.herokuapp.com/api/auth'
    constructor(private http: HttpClient, private router: Router) { }

    list(): Observable<provincia[]> {
        return this.http.get<provincia[]>(this.url + '/provincia');
    }
}