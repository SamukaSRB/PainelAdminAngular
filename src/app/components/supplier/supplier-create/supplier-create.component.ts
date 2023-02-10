import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {

  supplier : Supplier = {
    supplierName: '',
    supplierContactName: '',
    supplierEmail: '',
    supplierCnpj: '',
    supplierAddress: '',
    supplierPostalCode: '',
    supplierCity: '',
    supplierState: '',
    supplierPhone: '',
    supplierHomePage: ''
  }
  constructor(private supplierService : SupplierService, private router: Router){}


  ngOnInit(): void {
   
  }

   createSupplier(): void {
      this.supplierService.create(this.supplier).subscribe(() => {
      this.supplierService.showMessage('Fornecedor cadastrado com sucesso!')
      this.router.navigate(['/supplier'])
      })

    }

    cancel(): void {
      this.supplierService.showMessage("Operação cancelada!");
      this.router.navigate(["/supplier"]);
    }
  
}
