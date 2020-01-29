import { Injectable } from '@angular/core';
import { UserData } from '../model/userdata';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private tokenService: TokenService, private router: Router) { this.isUserLoggedIn() }
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  username: string;
  password: string;

  login(userData: UserData, error: boolean) {
    if (userData.username.length > 0 && userData.password.length > 0) {
      this.tokenService.getToken(userData).subscribe(result => {
        result.expires_in = new Date().getTime() + result.expires_in * 1000;
        sessionStorage.setItem('jsessionid', JSON.stringify(result));
        this.router.navigateByUrl('/home');
      // tslint:disable-next-line: no-shadowed-variable
      }, error => error = true);
    }
    this.username = userData.username;
    this.password = userData.password;
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, userData.username);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem('jsessionid');
    this.username = null;
    this.password = null;
  }

   isUserLoggedIn() {
    // tslint:disable-next-line: prefer-const
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return false;
    }
    return true;
  }

  getLoggedInUserName() {
    // tslint:disable-next-line: prefer-const
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return '';
    }
    return user;
  }
}
