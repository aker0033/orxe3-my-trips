import {InMemoryDbService} from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService{


  constructor() { }
 createDb() {
  let trips = [
  {
    id: 1, Origin: 'ORD', Destination: 'LAS',
    StartDate: new Date('9/1/2021, 11:00 AM'), EndDate: new Date('9/3/2021, 6:30 AM'),
    Title: 'Vegas trip', TripID: 'TRT3132', Status: 'Active',
    Components: [
      {
        ComponentType: 'Air',
        Description: 'Flight from Chicago Ohare to Mcarren int. Las Vegas airport',
        Cost: 250.13
      },
      {
        ComponentType: 'Car',
        Description: 'Hertz rental car exotic',
        Cost: 302.10
      },
      {
        ComponentType: 'Hotel',
        Description: 'Circus, Circus players club discount room',
        Cost: 100.20
      }
    ]
  },
  {
    id: 2, Origin: 'MSP', Destination: 'LGA',
    StartDate: new Date('8/10/2021, 9:45 AM'), EndDate: new Date('8/15/2021, 3:50 PM'),
    Title: 'New York summer', TripID: 'DR5421', Status: 'Active',
    Components: [
      {
        ComponentType: 'Air',
        Description: 'La Guardia airport New York, New York',
        Cost: 250.13
      },
      {
        ComponentType: 'Car',
        Description: 'Avis rental car luxury sedan',
        Cost: 231.10
      },
      {
        ComponentType: 'Hotel',
        Description: '4 seasons downtown',
        Cost: 1000.34
      }
    ]
  },
  {
    id: 3, Origin: 'LAS', Destination: 'LGA',
    StartDate: new Date('10/10/2021, 8:15 AM'), EndDate: new Date('9/15/2021, 12:30 PM'),
    Title: 'New York Autum', TripID: 'FGH987', Status: 'Active',
    Components: [
      {
        ComponentType: 'Air',
        Description: 'La Guardia airport New York, New York',
        Cost: 342.21
      },
      {
        ComponentType: 'Car',
        Description: 'Budget rental car SUV',
        Cost: 298.10
      }
    ]
  },
  {
    id: 4, Origin: 'LAX', Destination: 'LGA',
    StartDate: new Date('11/10/2021, 1:15 PM'), EndDate: new Date('10/15/2021, 5:55 PM'),
    Title: 'New York Thanksgiving', TripID: 'HOP009', Status: 'Active',
    Components: [
      {
        ComponentType: 'Air',
        Description: 'La Guardia airport New York, New York',
        Cost: 345.70
      },
      {
        ComponentType: 'Car',
        Description: 'Hertz rental car sedan',
        Cost: 145.34
      },
      {
        ComponentType: 'Hotel',
        Description: 'Ritz Carlton',
        Cost: 1598.97
      }
    ]
  },
  {
    id: 5, Origin: 'DFW', Destination: 'SJA',
    StartDate: new Date('12/10/2021, 12:30 PM'), EndDate: new Date('11/15/2021, 2:35 PM'),
    Title: 'Costa Rica', TripID: 'DLK112', Status: 'Active',
    Components: [
      {
        ComponentType: 'Air',
        Description: 'San Jose Costa Rica',
        Cost: 634.56
      },
      {
        ComponentType: 'Hotel',
        Description: 'Guancasta Bay Dreams Resort',
        Cost: 2305.55
      }
    ]
  }
  ];

  return {
      trips
    };
  }
}
