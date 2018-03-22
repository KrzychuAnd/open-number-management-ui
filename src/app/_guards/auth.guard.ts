import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../_services/authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {

        return this.authenticationService.isLoggedIn.take(1).map((isLoggedIn: boolean) => {
            if (!isLoggedIn) {
                this.router.navigate(['/login']); 
                return false;
            }
            return true;
        })
    }
}
