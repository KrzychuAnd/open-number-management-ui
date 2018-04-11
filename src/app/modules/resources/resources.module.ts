import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceEditComponent } from './resource-edit/resource-edit.component';
import { ResourcesComponent } from './resources.component';
import { ResourceTypeListComponent } from './resource-type-list/resource-type-list.component';
import { ResourceManageComponent } from './resource-manage/resource-manage.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ResourcesRoutingModule,
    ClarityModule
  ],
  declarations: [
    ResourceListComponent, 
    ResourceEditComponent, 
    ResourcesComponent, 
    ResourceTypeListComponent, ResourceManageComponent
  ]
})
export class ResourcesModule { }
