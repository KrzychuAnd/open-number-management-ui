import { ResourceTypeService } from './../../../_services/resourceType/resource-type.service';
import { AuthenticationService } from './../../../_services/authentication/authentication.service';
import { ResourceType } from './../../../_models/resource_type/resource-type';
import { User } from './../../../_models/user/user';
import { Component, OnInit } from '@angular/core';
import { ResourceCount } from '../../../_models/resource_count/resource-count';
import { ResourceService } from '../../../_services/resource/resource.service';

@Component({
  selector: 'app-resource-manage',
  templateUrl: './resource-manage.component.html',
  styleUrls: ['./resource-manage.component.scss']
})
export class ResourceManageComponent implements OnInit {

  user: User = new User();
  resourceTypes: ResourceType[] = new Array<ResourceType>();
  resourceCounts: ResourceCount[] = new Array<ResourceCount>();

  constructor(private authenticationService: AuthenticationService, private resourceTypeService: ResourceTypeService, private resourceService: ResourceService) { }

  ngOnInit() {
    console.log("ResourceManageComponent");
    this.resourceTypeService.getResourceTypesByRoleId(this.authenticationService.user.roleId).subscribe(response => {
      this.resourceTypes = response;
      console.log("this.resourceTypes: " + this.resourceTypes);
    });

    this.resourceService.getResourcesReport().subscribe(response => {
      this.resourceCounts = response;
    });
    
  }

}
