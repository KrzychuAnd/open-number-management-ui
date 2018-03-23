import { ResourceService } from './../_services/resource/resource.service';
import { AuthenticationService } from './../_services/authentication/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { Page } from './../_models/page/page';
import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../_models/resource/resource';

@Component({
  selector: 'app-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.scss']
})
export class ResourceViewComponent implements OnInit {

  @Input() resTypeName: String = "";
  @Input() pageNumber: number = 0;
  @Input() pageSize: number = 0;

  page: Page = new Page();
  resources: Resource[] = new Array<Resource>();

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private resourceService: ResourceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      //this.resTypeName = param.get(0).value;
      console.log("Krzychu ngOnInit ResourceViewComponent! resTypeName = " + params['resTypeName']);
      this.resTypeName = params['resTypeName'];
      this.pageNumber = params['pageNumber'];
      this.pageSize = params['pageSize'];
    });
    
    this.resourceService.getResourcesByResTypeName(this.resTypeName, this.pageNumber, this.pageSize).subscribe(response => {
      console.log("Krzychu ngOnInit ResourceViewComponent: " + response);
      this.resources = response.resources;
      this.page = response.page;
    });
  }

}