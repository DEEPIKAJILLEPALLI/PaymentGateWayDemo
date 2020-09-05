import { Component, OnInit, HostListener } from '@angular/core';
// import * as $ from 'jquery';
// import * as $ from 'src/assets/js/Jquery.js'


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  tranId:string;
  constructor() { 
    this.tranId=history.state.data;
  }

  ngOnInit(): void {
  }

  

  

}
