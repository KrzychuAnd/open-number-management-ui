import { ResourceTypeService } from './../../../_services/resourceType/resource-type.service';
import { ResourceType } from './../../../_models/resource_type/resource-type';
import { ResourceService } from './../../../_services/resource/resource.service';
import { AuthenticationService } from './../../../_services/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  reserveConfirmModal = false;
  retireConfirmModal = false;
  selResource: Resource;
  alertMessage: String;
  alertClass: String;

  constructor(private route: ActivatedRoute, private resourceService: ResourceService, private resourceTypeService: ResourceTypeService, private router: Router) {}

  ngOnInit() {
    this.parametersObservable = this.route.params.subscribe(params => {
      console.log("observable!!!!");
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

  ngOnDestroy() {
    this.alertMessage = "";
  }

  goBack() {
    this.alertMessage = "";
    this.router.navigate(['/resources/list']);
  }

  reserveModal(resource){
    this.selResource = resource;
    this.reserveConfirmModal = true;
  }

  retireModal(resource){
    this.selResource = resource;
    this.retireConfirmModal = true;
  }

  reserveResource(resource){
    console.log("reserve resource with name: " + resource.name);
    this.resourceService.reserveResource(resource).subscribe(response => {
      this.resources.forEach(res => {
        if (res.name == resource.name ){
          res = response;
          console.log("update resource: " + res.resourceStatus.name);
          console.log("TO DO!! Refresh grid by new status of changed resource status!!");
        }
      });
      this.alertMessage = "Resource '" + resource.name + "' moved to Resrved state";
      this.alertClass = "alert alert-success";
    }, err => {
      this.alertMessage = err.json().message;
      this.alertClass = "alert alert-danger";
    });

    this.reserveConfirmModal = false;
  }

  retireResource(resource){
    console.log("retire resource with name: " + resource.name);
    this.resourceService.retireResource(resource).subscribe(response => {
      this.resources.forEach(res => {
        if (res.name == resource.name ){
          res = response;
          console.log("update resource: " + res.resourceStatus.name);
          console.log("TO DO!! Refresh grid by new status of changed resource status!!");
        }
      });
      this.alertMessage = "Resource '" + resource.name + "' moved to Retired";
      this.alertClass = "alert alert-success";
    }, err => {
      this.alertMessage = err.json().message;
      this.alertClass = "alert alert-danger";
    });

    this.retireConfirmModal = false;
  }

  closeAlert() {
    this.alertMessage = "";
  }

}
