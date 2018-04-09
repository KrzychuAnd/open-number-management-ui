import { ResourceStatusService } from './_services/resourceStatus/resource-status.service';
import { RoleService } from './_services/role/role.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./_guards/auth.guard";
import { AuthenticationService } from "./_services/authentication/authentication.service";
import { ResourceTypeService } from "./_services/resourceType/resource-type.service";
import { UserService } from "./_services/user/user.service";
import { HeaderComponent } from './header/header.component';
import { profileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ResourceService } from './_services/resource/resource.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        profileComponent,
        SettingsComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        ResourceTypeService,
        UserService,
        RoleService,
        ResourceService,
        ResourceStatusService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
