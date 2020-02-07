import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { UserData } from '../model/userdata';

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



