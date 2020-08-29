import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl1 = 'http://127.0.0.1:8000/';
  baseUrl = 'https://guarded-inlet-69390.herokuapp.com/';
  baseUserUrl = `${this.baseUrl}upapi/users/`;
  profileUrl = `${this.baseUrl}upapi/profile/`;
  bookingUrl = `${this.baseUrl}upapi/booking/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  getProfile() {
    return this.httpClient.get(this.profileUrl, {headers: this.getAuthHeaders()});
  }  

  getBooking() {
    return this.httpClient.get(this.bookingUrl, {headers: this.getAuthHeaders()});
  }

  getUsers() {
    return this.httpClient.get(this.baseUserUrl, {headers: this.getAuthHeaders()});
  }

  loginUser(authData) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.headers});
  }
  
  editProfileUser(id: number, first_name: string, last_name: string, email: string, aadhar: string, zip_code: string, gender: string) {
    const body = ({first_name, last_name, email, aadhar, zip_code, gender});
    return this.httpClient.put(`${this.profileUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }

  updateProfilepicturee(id: number, cover) {
    const body =({cover});
    return this.httpClient.put(`${this.profileUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }

  updateProfilepicture(id: number, cover: File) {
    const uploadData = new FormData();
    uploadData.append('cover', cover);
    return this.httpClient.put(`${this.profileUrl}${id}/`, uploadData, {headers: this.getAuthHeaders()}).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  updateMovie(id: number, title: string, description: string) {
    const body = JSON.stringify({title, description});
    return this.httpClient.put(`${this.profileUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }

  registerUser(authData) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}upapi/users/`, body, {headers: this.headers});
  }

  registerBooking(authData) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}upapi/booking/`, body, {headers: this.headers});
  }

  registerBooking1(user: number, name: string, email: string, mobile_number: string, place_of_interest: string, journey_date: string, childs: string, adults: string) {
    const body = ({user, name, email, mobile_number, place_of_interest, journey_date, childs, adults});
    return this.httpClient.post(`${this.baseUrl}upapi/booking/`, body, {headers: this.getAuthHeaders()});
  }
  

  getAuthHeaders() {
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }



}
