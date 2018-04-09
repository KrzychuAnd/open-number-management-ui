import { Router } from '@angular/router';
import { ResourceService } from './../_services/resource/resource.service';
import { AuthenticationService } from './../_services/authentication/authentication.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchInput: String;
  isLoggedIn$: Observable<boolean>;
  isAdminUser$: Observable<boolean>;

  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private resourceService: ResourceService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    this.isAdminUser$ = this.authenticationService.isAdminUser;
  }

  onLogout() {
    this.authenticationService.logout();
  }

  getLoggedInUserName() {
    return this.authenticationService.username;
  }

  search() {
    console.log("Krzychu search input: " + this.searchInput);
    this.resourceService.getResourceByName(this.searchInput).subscribe(response => {
      this.error = '';
      this.router.navigate(['/resources/resName/' + this.searchInput]);
    }, err => {
      if (err.status == 404) {
        this.error = "Resource with name " + this.searchInput + " does not exists.";
      } else if(err.status == 403){
        this.error = "You do not have access to resource with name " + this.searchInput + ".";
      } else {
        this.error = "Something went wrong on server side!";
      }
    });
  }

  closeError(){
    this.error = '';
  }
}
