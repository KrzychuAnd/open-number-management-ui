import { ResourcesComponent } from './resources.component';
import { AuthGuard } from './../../_guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceEditComponent } from './resource-edit/resource-edit.component';
import { ResourceTypeListComponent } from './resource-type-list/resource-type-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {path: '', component: ResourceTypeListComponent},
      {path: 'resTypeName/:resTypeName/pageNum/:pageNum/pageSize/:pageSize', component: ResourceListComponent},
      {path: 'resName/:resName', component: ResourceEditComponent}
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
