import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceEditComponent } from './resource-edit/resource-edit.component';
import { ResourcesComponent } from './resources.component';
import { ResourceTypeListComponent } from './resource-type-list/resource-type-list.component';

@NgModule({
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    ClarityModule
  ],
  declarations: [ResourceListComponent, ResourceEditComponent, ResourcesComponent, ResourceTypeListComponent]
})
export class ResourcesModule { }
