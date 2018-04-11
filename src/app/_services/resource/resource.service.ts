import { Resource } from './../../_models/resource/resource';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class ResourceService {

  constructor(private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  getResourceById(resId: Number): Observable<Resource> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/resources/' + resId, options).map(
      (response: Response) => {
        let jsonObject = response.json();
        return jsonObject;
      });
  }

  getResourceByName(resName: String): Observable<Resource> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/resources/name/' + resName, options).map(
      (response: Response) => {
        let jsonObject = response.json();
        return jsonObject;
      });
  }

  getResourcesByResTypeId(resTypeId: Number, pageNumber: Number, pageSize: Number): Observable<any> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/resources/resTypeId/' + resTypeId + '?pageNumber=' + pageNumber+  '&pageSize=' + pageSize, options).map(
      (response: Response) => {
        let jsonObject = response.json();
        return jsonObject;
      });
  }

  getResourcesByResTypeName(resTypeName: String, pageNumber: Number, pageSize: Number): Observable<any> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/resources/resTypeName/' + resTypeName + '?pageNumber=' + pageNumber+  '&pageSize=' + pageSize, options).map(
      (response: Response) => {
        let jsonObject = response.json();
        return jsonObject;
      });
  }

  reserveResource(resource: Resource): Observable<Resource> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });
    let jsonBody: any;

    jsonBody = {
      "resStatusName": "RESERVED"
    };

    console.log("Krzychu jsonBody: " + JSON.stringify(jsonBody));
    return this.http.patch('http://localhost:8080/v1/resources/' + resource.id, JSON.stringify(jsonBody), options).map(
      (response: Response) => {
        let jsonObject = response.json();
        return jsonObject;
      });
  }  

  retireResource(resource: Resource): Observable<Resource> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    return this.http.patch('http://localhost:8080/v1/resources/retire/' + resource.name, null, options).map(
      (response: Response) => {
        let jsonObject = response.json();
        return jsonObject;
      });
  }  

  patchResource(resource: Resource): Observable<Resource> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });
    let jsonBody: any;

    jsonBody = {
      "resStatusName": resource.resourceStatus.name,
      "descr": resource.descr
    };

    console.log("Krzychu jsonBody: " + JSON.stringify(jsonBody));
    // get resource types from api
    return this.http.patch('http://localhost:8080/v1/resources/' + resource.id, JSON.stringify(jsonBody), options).map(
      (response: Response) => {
        let jsonObject = response.json();
        return jsonObject;
      });
  }  

  getResourcesReport(): Observable<any> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/resources/report', options).map(
      (response: Response) => {
        let jsonObject = response.json();
        return jsonObject;
      });
  }
}
