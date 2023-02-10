import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
customer : Customer

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const customerId = this.route.snapshot.paramMap.get('customerId');
    this.customerService.readById(customerId).subscribe((customer) => {
    this.customer = customer;
    console.log(customer);
    });
  }

  delete(): void {
    this.customerService.delete(this.customer.customerId).subscribe(() => {
    this.customerService.showMessage("Cliente excluido com sucesso!");
    this.router.navigate(["/customer"]);
    });
  }

  cancel(): void {
    this.customerService.showMessage("Operação cancelada!");
   this.router.navigate(["/customer"]);
 } 

}
