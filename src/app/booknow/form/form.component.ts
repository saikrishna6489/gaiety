import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users: any = [];
  Packageform:FormGroup;
  MobileNumber:any;

  constructor(
    private fb:FormBuilder,
    private apiService:AuthenticationService,
    private router: Router,) { }

  ngOnInit(): void {

    this.apiService.getProfile().subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      },
      error => console.log(error)
    );

    this.Packageform=this.fb.group({
      name:[null, [Validators.required,Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      mobile_number: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10)]],
      place_of_interest:[null, Validators.required],
      journey_date:[null, Validators.required],
      childs:[null, Validators.required],
      adults:[null, Validators.required],
      accomidation:[null, Validators.required],
      special_instructions:[null, Validators.required],

    });
  }

  Form(formData:NgForm){
    console.log(formData);
  }

  saveForm1() {

    this.apiService.registerBooking(this.Packageform.value).subscribe(
      result => {
        this.router.navigate(['/Login']);
      },
      error => console.log(error)
    );
  
}

saveForm() {
  this.apiService.registerBooking1(this.users[0].user,
    this.Packageform.value.name, this.Packageform.value.email, this.Packageform.value.mobile_number, 
    this.Packageform.value.place_of_interest, this.Packageform.value.journey_date, this.Packageform.value.childs, 
    this.Packageform.value.adults, this.Packageform.value.accomidation, this.Packageform.value.special_instructions).subscribe(
    result => {
      this.router.navigate(['/Myaccount/Bookings']);
    },
    error => console.log(error)
  );
}

}
