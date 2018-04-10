import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
	user : any = {}

  constructor() { }

  ngOnInit() {
	  
  }
  getModel(yname){
			console.log(yname);
  }
onSubmit(userModel, userForm){
	console.log(userModel, userForm);
		}
}