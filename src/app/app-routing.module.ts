import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutegaurdService } from './routegaurd.service';


import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProfileComponent } from './profile/profile.component';
import { TripsComponent } from './trips/trips.component';
import { BookingsComponent } from './bookings/bookings.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RefreshComponent } from './refresh/refresh.component';
import { BooknowComponent } from './booknow/booknow.component';
import { FormComponent } from './booknow/form/form.component';
import { Package1Component } from './booknow/package1/package1.component';
import { Package2Component } from './booknow/package2/package2.component';
import { Package3Component } from './booknow/package3/package3.component';
import { Package4Component } from './booknow/package4/package4.component';
import { Package5Component } from './booknow/package5/package5.component';








const routes: Routes = [
  {path:"", redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Aboutus', component:AboutusComponent},
  {path:'Services', component:ServicesComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Login', component:LoginComponent},
  {path:'Myaccount', component:MyaccountComponent,
  children:[

    {path:'Profile', component:ProfileComponent},
    {path:'Editprofile', component:EditprofileComponent},
    {path:'refresh', component:RefreshComponent},
    {path:"", redirectTo:'Profile', pathMatch:'full'},
    {path:'Trips', component:TripsComponent},
    {path:'Bookings', component:BookingsComponent},
    {path:'**', redirectTo:'Profile',pathMatch:'full'},

]
},
  {path:'Signup', component:SignupComponent},
  {path:'404', component: NotfoundComponent},
  
  {path:'Booknow', component:BooknowComponent,
  children:[
    {path:'Form', component:FormComponent},
    {path:"", redirectTo:'Form' , pathMatch:'full'},
    {path:'Package1', component:Package1Component},
    {path:'Package2', component:Package2Component},
    {path:'Package3', component:Package3Component},
    {path:'Package4', component:Package4Component},
    {path:'Package5', component:Package5Component},
]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }