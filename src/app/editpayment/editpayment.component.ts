import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AuthorizeApiService } from '../shared/authorize-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpayment',
  templateUrl: './editpayment.component.html',
  styleUrls: ['./editpayment.component.css']
})
export class EditpaymentComponent implements OnInit {

  anetEditPaymentToken:string;
  params:any;
  parentFrame:any;
  @ViewChild('form',null) postForm:ElementRef;  
  
  constructor(private authService:AuthorizeApiService, private router:Router,
    private ngZone:NgZone) {  
    
    this.anetEditPaymentToken=  history.state.token;
    console.log(this.anetEditPaymentToken);
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
    this.postForm.nativeElement.submit();
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

}
