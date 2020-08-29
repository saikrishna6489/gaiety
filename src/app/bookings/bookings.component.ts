import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: any = [];

  constructor(private apiService:AuthenticationService) { }

  ngOnInit(): void {
    this.apiService.getBooking().subscribe(
      data => {
        this.bookings = data;
        console.log(this.bookings);
      },
      error => console.log(error)
    );
  }

}
