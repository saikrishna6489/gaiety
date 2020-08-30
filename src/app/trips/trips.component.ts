import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
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
  abc = '2012-11-04';
  enter(raes) {
    return Date.parse("2020-08-30") > Date.parse(raes);
  }
}
