import { ResourceLifecycleService } from './../../../_services/resourceLifecycle/resource-lifecycle.service';
import { ResourceStatusService } from './../../../_services/resourceStatus/resource-status.service';
import { ResourceStatus } from './../../../_models/resource_status/resource-status';
import { ResourceService } from './../../../_services/resource/resource.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Resource } from '../../../_models/resource/resource';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss']
})
export class ResourceEditComponent implements OnInit, OnDestroy {

  resourceStatuses: ResourceStatus[];
  currentResourceStatus: ResourceStatus;
  resource: Resource;
  alertMessage: String;
  alertClass: String;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private location: Location,
    private resourceLifecycleService: ResourceLifecycleService
  ) { }

  ngOnInit() {
    console.log("Krzychu ngOnInit ResourceEditComponent!");
    let resName = this.route.snapshot.paramMap.get('resName');
    console.log("Krzychu resName: " + resName);
    this.resourceService.getResourceByName(resName).subscribe(response => {
      this.resource = response;
      this.resourceLifecycleService.getTargetResStatBySourceStatName(this.resource.resourceStatus.name).subscribe(response => {
        this.resourceStatuses = response;
        this.currentResourceStatus = new ResourceStatus();
        this.currentResourceStatus.name = this.resource.resourceStatus.name;
        this.currentResourceStatus.descr = this.resource.resourceStatus.descr;
        this.resourceStatuses.push(this.currentResourceStatus);
      });

    });
  }

  ngOnDestroy() {
    console.log("ResourceEdit onDestroy!!");
    this.alertMessage = "";
  }

  goBack() {
    console.log("goBack - TO DO if resource changed then display popup window to confirm you are ok to discard changes!!!");
    // window.history.back();
    this.alertMessage = "";
    this.location.back();
  }

  save() {
    console.log("Save - TO DO if resource changed!!!!");
    this.resourceService.patchResource(this.resource).subscribe(response => {
      this.resource.resourceHistories = response.resourceHistories;
      this.resourceLifecycleService.getTargetResStatBySourceStatName(this.resource.resourceStatus.name).subscribe(response => {
        this.resourceStatuses = response;
        this.currentResourceStatus = new ResourceStatus();
        this.currentResourceStatus.name = this.resource.resourceStatus.name;
        this.currentResourceStatus.descr = this.resource.resourceStatus.descr;
        this.resourceStatuses.push(this.currentResourceStatus);

        this.alertMessage = "Resource " + this.resource.name + " Saved.";
        this.alertClass = "alert alert-success";
      });
    }, err => {
      this.alertMessage = err.json().message;
      this.alertClass = "alert alert-danger";
    });
  }

  closeAlert() {
    this.alertMessage = "";
  }

  resourceStatusChange(resourceStatus){
    console.log("resourceStatusChange " + resourceStatus.name);
    this.resource.resourceStatus.name = resourceStatus.name;
    this.resource.resourceStatus.descr = resourceStatus.descr;
  }
}
