import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient,
                private router: Router) { }

    public isAuthenticated() {
        const accessToken = localStorage.getItem('accessToken');

        return accessToken !== 'undefined' && accessToken !== undefined && accessToken !== null;
    }

    public signOut() {
        localStorage.removeItem('accessToken');

        this.router.navigate(['signin']);
    }
}
