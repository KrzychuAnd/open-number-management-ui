import { UserService } from './../user/user.service';
import { User } from './../../_models/user/user';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private adminUser = new BehaviorSubject<boolean>(false);

  url = "http://localhost:8080/oauth/token";
  client_id = "testjwtclientid";
  client_secret = "XY7kmzoNzl100";
  public token: String;
  public username: String;
  public user: User = new User();

  constructor(private http: Http) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }

  get isAdminUser(){
    return this.adminUser.asObservable();
  }

  login(username: string, password: string): Observable<boolean> {

    let headers: Headers = new Headers();
    //client-id && client-secret
    headers.append("Authorization", "Basic " + btoa(this.client_id + ":" + this.client_secret));
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&grant_type=password", options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().access_token;
        if (token) {
          // set token property
          this.token = token;
          this.username = username;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          
          this.loggedIn.next(true);

          this.adminUser.next(response.json().isAdminUser);

          this.user = response.json().user;
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });

  }

  logout() {
    this.loggedIn.next(false);
    this.adminUser.next(false);
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
