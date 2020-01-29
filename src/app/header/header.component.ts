import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isLoggedIn = true;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isUserLoggedIn();
  }

  handleLogOut() {
    this.authService.logout();
  }


}
