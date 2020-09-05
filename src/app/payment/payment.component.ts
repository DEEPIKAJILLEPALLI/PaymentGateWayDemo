import { Component, OnInit, ViewChild, ElementRef, HostListener, NgZone } from '@angular/core';
// import * as $ from 'jquery';
// import * as $ from 'src/assets/js/Jquery.js'

import { AuthorizeApiService } from '../shared/authorize-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  anetToken:string='';
  params:any;
  parentFrame:any;
  @ViewChild('form',null) postForm:ElementRef;  
  constructor(private authService:AuthorizeApiService, private router:Router,
    private ngZone:NgZone) {  
    this.anetToken=  history.state.token;
    console.log(this.anetToken);
  }

  ngOnInit(): void {

}

  ngAfterViewInit(){ 
   this.submitForm();
   window["CommunicationHandler"] = {}; 
    function parseQueryString(str) {
      var vars = [];
      var arr = str.split('&');
      var pair;
      for (var i = 0; i < arr.length; i++) {
          pair = arr[i].split('=');
          vars[pair[0]] = unescape(pair[1]);
      }
      return vars;
  }
  window["CommunicationHandler"].onReceiveCommunication = (argument) => {
    console.log("Iframe code called");
    console.log(argument);
      this.params = parseQueryString(argument.qstr)
      console.log(this.params);
      this.parentFrame = argument.parent.split('/')[4];
      switch (this.params['action']) {
          case "transactResponse":
              var transResponse = JSON.parse(this.params['response']);
          if (transResponse.transId > 0) {
             console.log(transResponse.transId);
             this.ngZone.run(() => 
                this.router.navigate(["summary"],{state:{data:transResponse.transId }}));
             
          }   
          break;
          case "cancel":            
            this.ngZone.run(() => this.router.navigate(["checkout"]));
                           
      }
  }
}

  submitForm()
  {
    console.log("Token Generated..Calling submit form");
    this.postForm.nativeElement.submit();
  }

 
  LoadIFrame()
  {
    this.postForm.nativeElement.submit();
  }

}
