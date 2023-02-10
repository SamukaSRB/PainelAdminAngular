import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) {
    routeUrl: '/customer'
   }

  ngOnInit(): void {
  }

  navigateToCustomerCreate(): void {
    this.router.navigate(['/customer/create'])
  }


}
