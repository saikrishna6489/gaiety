import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  a = 0;
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
  today = new Date()


  year = this.today.getFullYear()
  month = this.today.getMonth()
  day = this.today.getDate()

  finalDate = `${this.year}-${this.month}-${this.day}`


  abc = '2012-11-04';
  enter(raes) {
    return Date.parse(this.finalDate) < Date.parse(raes);
  }

}
