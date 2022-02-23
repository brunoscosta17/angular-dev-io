import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from '../models/user';
import { BaseService } from 'src/app/services/base.service';

@Injectable()
export class AccountService extends BaseService {

    constructor(private http: HttpClient) { 
        super(); 
    }

    registerUser(user: User): Observable<any> {
        let response = this.http
            .post(this.UrlServiceV1 + 'nova-conta', user, this.GetHeaderJson())
            .pipe(
                map(this.ExtractData),
                error => this.ServiceError(error)
            );

        return response;
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