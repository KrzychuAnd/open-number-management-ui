import { ResourceService } from './../../../_services/resource/resource.service';
import { ResourceCount } from './../../../_models/resource_count/resource-count';
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
  resourceCounts: ResourceCount[] = new Array<ResourceCount>();
  reportHash = new Map<string, number>();

  constructor(private authenticationService: AuthenticationService, private resourceTypeService: ResourceTypeService, private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceTypeService.getResourceTypesByRoleId(this.authenticationService.user.roleId).subscribe(response => {
      this.resourceTypes = response;
      this.resourceTypes.forEach(resourceType => this.reportHash.set(resourceType.name, 0));

      this.resourceService.getResourcesReport().subscribe(response => {
        this.resourceCounts = response;
        this.resourceCounts.forEach(resourceCount => {
          let count = this.reportHash.get(resourceCount.resourceType.name);
          this.reportHash.set(resourceCount.resourceType.name, count + resourceCount.count);
        });
      });
    });
   
  }

}
