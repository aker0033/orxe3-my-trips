import { TripsService } from './../trips.service';
import { TripModel } from '../../models/trip.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})

export class TripComponent implements OnInit {
  public Trip: TripModel;
  public id: number;
  private trpSvc: TripsService;

  constructor(tripSvc: TripsService){
  const urlParams = new URLSearchParams(window.location.search);
  this.id = parseInt(urlParams.get('tripid'));
  this.trpSvc = tripSvc;
  this.trpSvc.getTrip(this.id).subscribe(data => this.Trip = data);
  }
  ngOnInit(): void{

  }
  cancelTrip(tripid: number): void{
    this.trpSvc.cancelTrip(tripid).subscribe(data => this.Trip = data);
  }
}



