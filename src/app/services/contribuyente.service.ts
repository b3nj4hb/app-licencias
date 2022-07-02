import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { persona } from "../classes/classes";
import { tipo_persona } from '../classes/classes';

@Injectable({
    providedIn: 'root'
})

export class personaService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private url: string = 'https://app-licencias.herokuapp.com/api/auth'
    constructor(private http: HttpClient, private router: Router) { }

    list(): Observable<persona[]> {
        return this.http.get<persona[]>(this.url + '/persona');
    }
    search(id: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/persona/${id}`)
    }
    save(post: persona): Observable<any> {
        return this.http.post<persona>(this.url + '/persona/add', post, this.httpOptions)
    }
    edit(id: number, upd: any) {
        return this.http.put(`${this.url}/persona/update/${id}`, upd)
    }
    delete(id: number) {
        return this.http.delete(`${this.url}/persona/delete/${id}`)
    }
}

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