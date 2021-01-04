import { Product } from './trip.product';

export class TripModel{
  id: number;
  Origin: string;
  Destination: string;
  StartDate: Date;
  EndDate: Date;
  Title: string;
  Status: string;
  TripID: string;
  Components: Product[];

  constructor(origin: string, destination: string, start: Date, end: Date, title: string, tripid: string ){
  this.Origin = origin;
  this.Destination = destination;
  this.StartDate = start;
  this.EndDate = end;
  this.Title = title;
  this.Status = 'Active';
  this.TripID = tripid;
  this.Components = [];
  }


}
