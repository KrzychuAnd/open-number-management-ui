import { ResourceTypeService } from './../../../_services/resourceType/resource-type.service';
import { AuthenticationService } from './../../../_services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user/user';
import { ResourceType } from '../../../_models/resource_type/resource-type';

@Component({
  selector: 'app-resource-type-list',
  templateUrl: './resource-type-list.component.html',
  styleUrls: ['./resource-type-list.component.scss']
})
export class ResourceTypeListComponent implements OnInit {

  user: User = new User();
  resourceTypes: ResourceType[] = new Array<ResourceType>();

  constructor(private authenticationService: AuthenticationService, private resourceTypeService: ResourceTypeService) { }

  ngOnInit() {
    this.resourceTypeService.getResourceTypesByRoleId(this.authenticationService.user.roleId).subscribe(response => {
      this.resourceTypes = response;
    });
    
  }

}
