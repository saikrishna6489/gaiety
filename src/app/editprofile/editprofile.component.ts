import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import * as AOS from 'aos';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  users: any = [];

  editprofileform:FormGroup;

  constructor(
    private fb:FormBuilder, 
    private apiService:AuthenticationService,
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService,
    ) { }

  ngOnInit(): void {
    AOS.init();

    this.apiService.getProfile().subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      },
      error => console.log(error)
    );

    this.editprofileform=this.fb.group({
      first_name:[null, [Validators.required,Validators.minLength(3)]],
      last_name:[null, [Validators.required,Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      aadhar:[null, [Validators.required,Validators.minLength(12)]],
      zip_code:[null, [Validators.required,Validators.minLength(6)]],
      gender:[null, [Validators.required,Validators.minLength(6)]],
      pic:[null, [Validators.required]],
    });
  }


  saveForm() {
      this.apiService.editProfileUser(this.users[0].user,
        this.editprofileform.value.first_name, this.editprofileform.value.last_name, this.editprofileform.value.email, 
        this.editprofileform.value.aadhar, this.editprofileform.value.zip_code, this.editprofileform.value.gender ).subscribe(
        result => {
          this.router.navigate(['/Myaccount/Profile']);
        },
        error => console.log(error)
      );
  }


}