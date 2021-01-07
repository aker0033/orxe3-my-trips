import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
public phoneNumber: String = "1-888-345-9923"
  constructor() { }

  ngOnInit() {
  }

}
