import { ResourcesComponent } from './resources.component';
import { AuthGuard } from './../../_guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceEditComponent } from './resource-edit/resource-edit.component';
import { ResourceTypeListComponent } from './resource-type-list/resource-type-list.component';
import { ResourceManageComponent } from './resource-manage/resource-manage.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {path: '', component: ResourceTypeListComponent},
      {path: 'list', component: ResourceTypeListComponent},
      {path: 'list/resTypeName/:resTypeName/pageNum/:pageNum/pageSize/:pageSize', component: ResourceListComponent},
      {path: 'list/resName/:resName', component: ResourceEditComponent},
      {path: 'resource-manage', component: ResourceManageComponent}
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
