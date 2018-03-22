import { Role } from './../../_models/role/role';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../authentication/authentication.service';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getRoles(): Observable<Role[]> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/roles/', options).map(
      (response: Response) => {
        let jsonObject = response.json();

        return jsonObject;
      });
  }

  getRoleById(Id: Number): Observable<Role> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });
    
    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/roles/' + Id, options).map(
      (response: Response) => {
        let jsonObject = response.json();

        return jsonObject;
      });
  }  
}
