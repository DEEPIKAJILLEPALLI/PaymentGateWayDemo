import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';
import { EditpaymentComponent } from './editpayment/editpayment.component';

const routes: Routes = [
  {path:'',component:CheckoutComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'summary',component:SummaryComponent},
  {path:'editpayment',component:EditpaymentComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
