import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { CustomerComponent } from './pages/customer/customer.component';

const appRoutes:Routes = [
	{path: 'AddCustomer', component:AddCustomerComponent},
	{path:'EditCustomer', component:EditCustomerComponent},
	{path:'Customer', component:EditCustomerComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes),
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }