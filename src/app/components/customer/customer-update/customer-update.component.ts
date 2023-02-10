import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Customer} from 'src/app/models/customer';
import { Supplier } from '../../../models/supplier';
import { CustomerService } from 'src/app/services/customer.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  supplier : Supplier;
  Supplier:any;
  SelectedValue:any;
  ChangeSupplier(e) {
  console.log(e.target.value);
  this.SelectedValue=e.target.value; 
  }


  customer : Customer = {     
    customerName :'',
    customerEmail :'',
    customerPostalCode :'',
    customerAddress : '',
    customerCity: '',  
    customerState: '',
    customerPhone: '',
    supplierId:''
    
  }


  constructor(private customerService : CustomerService, private supplierService : SupplierService,  private router: Router, private route : ActivatedRoute) { }
 

  ngOnInit(): void {

    const supplierId = this.route.snapshot.paramMap.get('supplierId');
    
    console.log(supplierId);
    this.supplierService.read().subscribe((data:any)=>{
      this.Supplier = data;     
    });

    const customerId = this.route.snapshot.paramMap.get('customerId');
    this.customerService.readById(customerId).subscribe((customer) => {
    this.customer = customer;
    console.log(customer);
    });
  }
  
  update(): void {
    this.customerService.updateClient(this.customer).subscribe(() => {
    this.customerService.showMessage("Cliente alterado com sucesso!");
    this.router.navigate(["/customer"])
    });
  }

  cancel(): void {
    this.customerService.showMessage("Operação cancelada!");
   this.router.navigate(["/customer"]);
 } 

}
