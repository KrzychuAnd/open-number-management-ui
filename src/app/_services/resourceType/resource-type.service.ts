import { User } from './../../_models/user/user';
import { UserService } from './../user/user.service';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ResourceType } from '../../_models/resource_type/resource-type';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceTypeService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService,
    private userService: UserService) {
  }

  getResourceTypes(): Observable<ResourceType[]> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/resourceTypes', options).map(
      (response: Response) => {
        let jsonObject = response.json()._embedded.resourceTypes;
        return jsonObject;
      });
  }

  getResourceTypesByRoleId(roleId: Number): Observable<ResourceType[]> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/resourceTypes/search/getResourceTypesByRoleId?roleId=' + roleId, options).map(
      (response: Response) => {
        let jsonObject = response.json()._embedded.resourceTypes;
        return jsonObject;
      });
  }

  /*getResourceTypesByUserName(username: String): ResourceType[] {
    let resourceTypes: ResourceType[] = new Array<ResourceType>();
    this.userService.getUserByLogin(this.authenticationService.username).subscribe(response => {
      let user: User = new User();
      user = response;
      user.role = response.role;
      user.role.permissions = response.role.permissions;     

      console.log("Krzychhhhh in user roleId " + user.roleId); 
      this.getResourceTypesByRoleId(user.roleId).subscribe(resp => {
        //this.resourceType = resp;    
        console.log("Krzychhhhh blabl " + resp);
        resourceTypes = resp;
        return resourceTypes;
      });
    });
    console.log("Krzychu xxxxxxxxx " + resourceTypes.forEach((rt) => {console.log("bbbbbbbbbb " + rt.name)}));
    
  }*/
}
