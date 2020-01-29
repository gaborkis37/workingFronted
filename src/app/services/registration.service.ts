import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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
}

