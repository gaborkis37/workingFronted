import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string) {

    const registrationUrl = 'http://localhost:8080/registration';

    const registrationParams: HttpParams = new HttpParams()
      .append('username', username)
      .append('email', email)
      .append('password', password);



    this.http.post(registrationUrl, {
      withCredentials: true
    }, {

        params: registrationParams
      }).subscribe((res) => {
        console.log(res);
      });

  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error: ${error.error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

