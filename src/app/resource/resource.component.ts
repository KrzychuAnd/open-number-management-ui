import { UserService } from './../_services/user/user.service';
import { ResourceType } from './../_models/resource_type/resource-type';
import { AuthenticationService } from './../_services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ResourceTypeService } from '../_services/resourceType/resource-type.service';
import { User } from '../_models/user/user';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  user: User = new User();
  resourceTypes: ResourceType[] = new Array<ResourceType>();

  constructor(private authenticationService: AuthenticationService, private resourceTypeService: ResourceTypeService, private userService: UserService) { }

  ngOnInit() {
    this.resourceTypeService.getResourceTypesByRoleId(this.authenticationService.user.roleId).subscribe(response => {
      this.resourceTypes = response;
    });
    
  }

}
