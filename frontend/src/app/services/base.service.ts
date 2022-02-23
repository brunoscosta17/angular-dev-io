import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export abstract class BaseService {

    protected UrlServiceV1: string = 'http://localhost:5001/api/v1/';

    protected GetHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected ExtractData(response: any) {
        return response.data || {};
    }

    protected ServiceError(response: Response | any) {

        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {
            if (response.statusText === 'Unknow Error') {
                customError.push('Ocorreu um erro desconhecido!');
                response['error'].errors = customError;
            }
        }
        console.error(response);
        return throwError(response);

    }

}