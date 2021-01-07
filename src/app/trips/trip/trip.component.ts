import { ActivatedRoute } from '@angular/router';
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

  constructor(private trpSvc: TripsService, private route: ActivatedRoute){
  }
  ngOnInit(): void{
    this.id = Number(window.location.href.split('/').pop());
    this.trpSvc.getTrip(this.id).subscribe(data => this.Trip = data);
    this.trpSvc.tripUpdated.subscribe(trp => this.Trip = trp);
  }
  cancelTrip(tripid: number): void{
    this.trpSvc.cancelTrip(tripid)
  }
}



