import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FixedcontentComponent } from './fixedcontent/fixedcontent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProfileComponent } from './profile/profile.component';
import { TripsComponent } from './trips/trips.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RefreshComponent } from './refresh/refresh.component';
import { BooknowComponent } from './booknow/booknow.component';
import { FormComponent } from './booknow/form/form.component';
import { Package1Component } from './booknow/package1/package1.component';
import { Package2Component } from './booknow/package2/package2.component';
import { Package3Component } from './booknow/package3/package3.component';
import { Package4Component } from './booknow/package4/package4.component';
import { Package5Component } from './booknow/package5/package5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    FixedcontentComponent,
    AboutusComponent,
    ServicesComponent,
    ContactComponent,
    NewsComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    MyaccountComponent,
    ProfileComponent,
    TripsComponent,
    BookingsComponent,
    EditprofileComponent,
    RefreshComponent,
    BooknowComponent,
    FormComponent,
    Package1Component,
    Package2Component,
    Package3Component,
    Package4Component,
    Package5Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
