import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../../_models/user/user';

@Injectable()
export class UserService {
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/users/', options).map(
      (response: Response) => {
        let jsonObject = response.json();

        return jsonObject;
      });
  }

  getUserByLogin(login: String): Observable<User> {
    // add authorization header with jwt token
    let headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this.authenticationService.token,
      'Content-Type': 'application/json'
    });
    
    let options = new RequestOptions({ headers: headers });

    // get resource types from api
    return this.http.get('http://localhost:8080/v1/users/login/' + login, options).map(
      (response: Response) => {
        let jsonObject = response.json();

        return jsonObject;
      });
  }

}
