import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { voucher_pago } from '../classes/classes';

@Injectable({
    providedIn: 'root'
})

export class voucherPagoService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private url: string = 'https://app-licencias.herokuapp.com/api/auth'
    constructor(private http: HttpClient, private router: Router) { }

    save(voucher: voucher_pago): Observable<any> {
        return this.http.post<any>(this.url + '/voucher_pago/add', voucher)
    }
}