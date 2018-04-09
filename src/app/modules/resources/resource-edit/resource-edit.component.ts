import { ResourceStatusService } from './../../../_services/resourceStatus/resource-status.service';
import { ResourceStatus } from './../../../_models/resource_status/resource-status';
import { ResourceService } from './../../../_services/resource/resource.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../_models/resource/resource';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss']
})
export class ResourceEditComponent implements OnInit {

  resourceStatuses: ResourceStatus[]; // = new Array<ResourceStatus>();
  resource: Resource; 

  constructor(
    private route: ActivatedRoute, 
    private resourceService: ResourceService, 
    private location: Location,
    private resourceStatusService: ResourceStatusService
  ) { }

  ngOnInit() {
    console.log("Krzychu ngOnInit ResourceEditComponent!");
    let resName = this.route.snapshot.paramMap.get('resName');
    console.log("Krzychu resName: " + resName);
    this.resourceService.getResourceByName(resName).subscribe(response => this.resource = response);
    this.resourceStatusService.getResourceStatuses().subscribe(response => {
      this.resourceStatuses = response._embedded.resourceStatuses;
    });
  }

  goBack() {
    // window.history.back();
    this.location.back();
  }
}
