import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor(private apiService:AuthenticationService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    AOS.init();

    const mrToken = this.cookieService.get('mr-token');
    if (!mrToken) {
      this.router.navigate(['/Login']);
    } else {

    }
  }

}
