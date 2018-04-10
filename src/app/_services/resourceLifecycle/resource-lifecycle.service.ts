import { Observable } from 'rxjs';
import { AuthenticationService } from './../authentication/authentication.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ResourceLifecycleService {

  constructor(private http: Http,
    private authenticationService: AuthenticationService) { }

    getTargetResStatBySourceStatName(sourceStatusName: String): Observable<any> {
      // add authorization header with jwt token
      let headers: Headers = new Headers({
        'Authorization': 'Bearer ' + this.authenticationService.token,
        'Content-Type': 'application/json'
      });
  
      let options = new RequestOptions({ headers: headers });
  
      // get resource statuses from api
      return this.http.get('http://localhost:8080/v1/resourceLifecycles/search/getTargetStatusesBySourceStatusName?sourceStatusName=' + sourceStatusName, options).map(
        (response: Response) => {
          let jsonObject = response.json();
          return jsonObject._embedded.resourceStatuses;
        });
    }
}
