import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TripModel } from 'src/app/models/trip.model';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})

export class TripsListComponent implements OnInit {
  trips: TripModel[];
  constructor(private tripSvc: TripsService) { }

  ngOnInit(): void {
    this.tripSvc.getTrips().subscribe(data => this.trips = data);
  }
}




