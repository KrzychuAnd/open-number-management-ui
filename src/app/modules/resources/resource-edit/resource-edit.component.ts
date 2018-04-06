import { ResourceService } from './../../../_services/resource/resource.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../_models/resource/resource';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss']
})
export class ResourceEditComponent implements OnInit {

  resource: Resource; // = new Resource();

  constructor(private route: ActivatedRoute, private resourceService: ResourceService) { }

  ngOnInit() {
    console.log("Krzychu ngOnInit ResourceEditComponent!");
    let resName = this.route.snapshot.paramMap.get('resName');
    console.log("Krzychu resName: " + resName);
    this.resourceService.getResourceByName(resName).subscribe(response => this.resource = response);
  }

}
