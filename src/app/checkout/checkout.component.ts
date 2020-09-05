import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import * as $ from 'src/assets/js/Jquery.js'
import { AuthorizeApiService } from '../shared/authorize-api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  amount:string="10";
  anetToken:string='';
  anetEditPaymentToken:string='';
  private subscription:Subscription;
  @ViewChild('form',null) postForm:ElementRef;  
  constructor(private router:Router,private authService:AuthorizeApiService) {     

  } 
  ngOnInit(): void { }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
    
  EditPaymentDetails()
  {
    console.log("calling token from component");
    this.subscription=this.authService.getAuthorizeEditPaymentToken()
                    .subscribe(
                      data => { this.anetEditPaymentToken= data;
                        console.log(this.anetToken);
                       console.log('navigating to Edit Payment route');
                       this.router.navigate(['editpayment'], {state: { token:this.anetEditPaymentToken}});  
                      }
                    );
         
  }

  navigateToPayment()
  {    
    console.log("calling token from component");
    this.subscription=this.authService.getAuthorizeToken(this.amount)
                    .subscribe(
                      data => { this.anetToken= data;
                        console.log(this.anetToken);
                        console.log('navigating to payment route');
                          this.router.navigate(['payment'], {state: { token:this.anetToken}});
                      }
                    );
  }

}
