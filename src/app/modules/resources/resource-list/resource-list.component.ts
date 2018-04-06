import { ResourceTypeService } from './../../../_services/resourceType/resource-type.service';
import { ResourceType } from './../../../_models/resource_type/resource-type';
import { ResourceService } from './../../../_services/resource/resource.service';
import { AuthenticationService } from './../../../_services/authentication/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { Resource } from './../../../_models/resource/resource';
import { Page } from './../../../_models/page/page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  private parametersObservable: any;

  resourceType: ResourceType = new ResourceType();
  page: Page = new Page();
  resources: Resource[] = new Array<Resource>();
  pageArray = new Array();

  constructor(private route: ActivatedRoute, private resourceService: ResourceService, private resourceTypeService: ResourceTypeService) {}

  ngOnInit() {
    this.parametersObservable = this.route.params.subscribe(params => {
      let resTypeName = this.route.snapshot.paramMap.get('resTypeName');
      let pageNum = parseInt(this.route.snapshot.paramMap.get('pageNum'), 10);
      let pageSize = parseInt(this.route.snapshot.paramMap.get('pageSize'), 10);
  
      this.resourceTypeService.getResourceTypeByName(resTypeName).subscribe(response => this.resourceType = response);
  
      this.resourceService.getResourcesByResTypeName(resTypeName, pageNum, pageSize).subscribe(response => {
        this.resources = response.resources;
        this.page = response.page;
        this.pageArray = new Array(this.page.totalPages);
      });      
    });

  }

}
