import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class AccountService {

    constructor(private http: HttpClient) { 
        // super(); 
    }

    registerUser(usuario: User) {
        // let response = this.http
        //     .post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
        //     .pipe(
        //         map(this.extractData),
        //         catchError(this.serviceError));

        // return response;
    }

    login(usuario: User) {
        // let response = this.http
        //     .post(this.UrlServiceV1 + 'entrar', usuario, this.ObterHeaderJson())
        //     .pipe(
        //         map(this.extractData),
        //         catchError(this.serviceError));

        // return response;
        
    }
    
}