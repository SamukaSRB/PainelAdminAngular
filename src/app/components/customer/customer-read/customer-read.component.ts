import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {
  customer : Customer[];

  displayedColumns = [
    //'customerId',
    'customerName',
    'customerEmail',
    'customerPostalCode',
    'customerAddress',
    'customerCity',   
    'customerState',
    'customerPhone', 
    'action'
    ]


  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.customerService.read().subscribe(customer => {
    this.customer = customer
    }) 
  }

}
