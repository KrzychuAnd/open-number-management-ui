import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log("Krzychu ngOnInit SidenavComponent!");
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

}
