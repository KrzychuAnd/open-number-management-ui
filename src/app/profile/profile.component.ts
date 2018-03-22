import { Role } from './../_models/role/role';
import { AuthenticationService } from './../_services/authentication/authentication.service';
import { UserService } from './../_services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class profileComponent implements OnInit {
  user: User = new User();

  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserByLogin(this.authenticationService.username).subscribe(response => {
      this.user = response;
      this.user.role = response.role;
      this.user.role.permissions = response.role.permissions;      
    });

  }

  save(){
    console.log("Profile Save TO DO!!!");
  }

}
