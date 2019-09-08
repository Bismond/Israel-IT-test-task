import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(): Observable<boolean> | boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['signin']);
        }

        return this.authService.isAuthenticated();
    }
}
