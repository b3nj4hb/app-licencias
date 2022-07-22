import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { persona, postpersona } from "../classes/classes";

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
    save(post: postpersona): Observable<any> {
        return this.http.post<any>(this.url + '/persona/add', post)
    }
    edit(id: number, upd: any) {
        return this.http.put(`${this.url}/persona/update/${id}`, upd)
    }
    delete(id: number) {
        return this.http.delete(`${this.url}/persona/delete/${id}`)
    }
    retornarid(ruc: any, num_documento:any): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/persona/retornarid/${ruc}/${num_documento}`)
    }
    updurl(id: number, upd: any) {
        return this.http.put(`${this.url}/persona/updurl/${id}`, upd)
    }
    listarcontribuyentes(): Observable<persona[]> {
        return this.http.get<persona[]>(this.url + '/listarcontribuyentes');
    }
    buscarlocalidad(id: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.url}/persona/buscarlocalidad/${id}`)
    }
}