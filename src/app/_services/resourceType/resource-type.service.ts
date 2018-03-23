import { User } from './../../_models/user/user';
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
    private authenticationService: AuthenticationService
  ) {
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
}
