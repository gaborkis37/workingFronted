import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { UserData } from '../model/userdata';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private tokenService: TokenService, private router: Router, private authService: AuthenticationService) { }

  userData: UserData = new UserData();
  error = false;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  login() {
    this.authService.login(this.userData, this.error);
  }


}
