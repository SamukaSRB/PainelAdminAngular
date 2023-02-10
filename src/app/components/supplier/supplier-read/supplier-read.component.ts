import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-read',
  templateUrl: './supplier-read.component.html',
  styleUrls: ['./supplier-read.component.css']
})
export class SupplierReadComponent implements OnInit {

  supplier : Supplier[];
  supplierToEdit?: Supplier;
  displayedColumns = [
    //'supplierId',
    'supplierName',
    //'supplierEmail',
    //'supplierCnpj',
    'supplierPostalCode',
    'supplierAddress',
    'supplierCity',
    'supplierState',
    'supplierPhone',
   // 'supplierHomePage',
     'action'
    ]


  constructor(private SupplierService : SupplierService){}

  ngOnInit(): void {
    this.SupplierService.read().subscribe(supplier => {
    this.supplier = supplier
    }) 

  }  
  
 

}
