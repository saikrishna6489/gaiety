import { Component, OnInit,HostListener,AfterContentChecked } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../authentication.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  activetab = "Home";
  isLoggedIn: boolean;
  
  constructor(
    private cookieService: CookieService,
    private auth: AuthenticationService,) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isloggedIn();
  }
  head_variable=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop>0||document.documentElement.scrollTop>120){
      this.head_variable=true;
    }
    else{
      this.head_variable=false;
    }
  }

  ngAfterContentChecked() {
    of(this.auth.isloggedIn()).subscribe(
      () => {
        this.isLoggedIn = this.auth.isloggedIn();
      }
    );

  }

  getActiveTab(tabname:string){
    this.activetab = tabname;
  }
  logout() {
    this.auth.logout();
  }

}
