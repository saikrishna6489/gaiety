import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  cover: File;
  baseUrl = 'https://guarded-inlet-69390.herokuapp.com/';
  baseUserUrl = `${this.baseUrl}upapi/users/`;
  profileUrl = `${this.baseUrl}upapi/profile/`;
  

  isDisplay=false;
  toggleDisplay(){
    this.isDisplay=!this.isDisplay;
  }

  users: any = [];

  constructor(private apiService:AuthenticationService, private router: Router,private http: HttpClient,public _location: Location) { }

  ngOnInit(): void {
    AOS.init();
    this.apiService.getProfile().subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      },
      error => console.log(error)
    );
  }

  btnClick= function () {
    this.router.navigateByUrl('/Myaccount/Editprofile');
  };
  
  onImageChanged(event: any) {
    this.cover = event.target.files[0];
  }

  newBook() {
    const uploadData = new FormData();
    uploadData.append('pic', this.cover, this.cover.name);
    uploadData.append('email', this.users[0].email);
    uploadData.append('first_name', this.users[0].first_name);
    uploadData.append('last_name', this.users[0].last_name);
    this.http.put(`${this.profileUrl}${this.users[0].id}/`, uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.router.navigateByUrl("Myaccount/refresh", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);
    });
  }
}