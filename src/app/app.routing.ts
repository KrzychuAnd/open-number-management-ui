import { ResourceViewComponent } from './resource-view/resource-view.component';
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { profileComponent } from './profile/profile.component';
import { ResourceComponent } from './resource/resource.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SettingsComponent } from './settings/settings.component';
import { AddResourceComponent } from './add-resource/add-resource.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
    {path: 'resource', component: ResourceComponent, canActivate: [AuthGuard]},
    {path: 'addResource', component: AddResourceComponent, canActivate: [AuthGuard]},
    {path: 'resourceView', component: ResourceViewComponent, canActivate: [AuthGuard]},
    {path: 'sidenav', component: SidenavComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: profileComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
