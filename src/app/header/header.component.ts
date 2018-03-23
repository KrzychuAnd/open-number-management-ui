import { AuthenticationService } from './../_services/authentication/authentication.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isAdminUser$: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    this.isAdminUser$ = this.authenticationService.isAdminUser;
  }

  onLogout(){
    this.authenticationService.logout();
  }

  getLoggedInUserName(){
    return this.authenticationService.username;
  }

}
