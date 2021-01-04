import { Injectable } from '@angular/core';
import { TripModel } from '../models/trip.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class TripsService {
  SERVER_URL = 'http://localhost:8080/api/';
  tripsEndPoint = "trips";
  trips: TripModel[];

  constructor(private httpClient: HttpClient) { }


  getTrips(): Observable<TripModel[]> {
    return this.httpClient.get<TripModel[]>(this.SERVER_URL + this.tripsEndPoint)
    .pipe(map((res) => res));
  }

   getTrip(tripid: number): Observable<TripModel> {
     return this.httpClient.get<TripModel>(this.SERVER_URL + this.tripsEndPoint + '/' + tripid)
     .pipe(map((res) => res));
  }

   addTrip(trip: TripModel){
     this.httpClient.post(this.SERVER_URL + '/' + this.tripsEndPoint, trip);
   }

   cancelTrip(tripid: number): Observable<TripModel>{
    let result;
    let trip = this.httpClient.get<TripModel>(this.SERVER_URL + this.tripsEndPoint + '/' + tripid)
    .pipe(map((res) => res));
    trip.subscribe(data => result = data);
    this.httpClient.put(this.SERVER_URL + this.tripsEndPoint + '/' + tripid, result);
    return result;
   }
}

