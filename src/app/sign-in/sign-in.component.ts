import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import CryptoJS from 'crypto-js';

@Component({
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    authorizationFrom: FormGroup = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(private authService: AuthService,
                private router: Router) {}

    signIn(event) {
        if (this.authorizationFrom.valid) {
            this.authService.signIn(this.authorizationFrom.value).subscribe(
                data => {
                    if (data[0]) {
                        localStorage.setItem('accessToken', CryptoJS.SHA1(data[0].email));

                        this.router.navigate(['']);
                    }
                });
        }
    }
}
