import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  errorClass = 'error';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/resources']);
        } else {
          this.error = "User name or password invalid";
          this.loading = false;
          this.errorClass = 'error active';
        }
      }, err => {
        if (err.status == 400) {
          this.error = "User name or password invalid";
        } else {
          this.error = "Something went wrong on server side!";
        }
        this.loading = false;
        this.errorClass = 'error active';
      });
  }
}
