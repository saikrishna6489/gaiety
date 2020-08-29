import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import * as AOS from 'aos';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform:FormGroup;

  constructor(private fb:FormBuilder,
    private apiService:AuthenticationService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    AOS.init();

    this.Loginform=this.fb.group({
      'username':[null, [Validators.required,Validators.minLength(3)]],
      'password':[null, [Validators.required,Validators.minLength(6)] ],
    });
  }
  Login(formData:NgForm){
    console.log(formData);
  }

  loginUser() {
    this.apiService.loginUser(this.Loginform.value).subscribe(
      (result: TokenObj) => {
        this.cookieService.set('mr-token', result.token);
        this.router.navigate(['/Myaccount']);
      },
      error => console.log(error)
    );
  }

}

