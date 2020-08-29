import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import * as AOS from 'aos';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Signupform:FormGroup;

  constructor(
    private fb:FormBuilder, 
    private apiService:AuthenticationService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    AOS.init();

    this.Signupform=this.fb.group({
      username:[null, [Validators.required,Validators.minLength(3)]],
      first_name:[null, [Validators.required,Validators.minLength(3)]],
      last_name:[null, [Validators.required,Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required,Validators.minLength(6)]],


    });
  }
  Signup(formData:NgForm){
    console.log(formData);
  }

  saveForm() {

      this.apiService.registerUser(this.Signupform.value).subscribe(
        result => {
          this.router.navigate(['/Login']);
        },
        error => console.log(error)
      );
    
  }


}
