import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { UserData } from '../userdata';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  username: string;
  email: string;
  password: string;
  userData: UserData;

  register() {


    // tslint:disable-next-line: max-line-length
    this.registrationService.register(this.username, this.email, this.password);
    this.router.navigateByUrl('/home');
  }
}



