import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    public signIn(loginData: any): Observable<any> {
        let params = new HttpParams();

        params = params.set('email', loginData.email);
        params = params.set('password', loginData.password);

        return this.http.get('http://localhost:3000/userdata', { params });
    }

    public signOut() {
        localStorage.removeItem('accessToken');

        this.router.navigate(['signin']);
    }
}
