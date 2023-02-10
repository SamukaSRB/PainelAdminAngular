import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-supplier-delete',
  templateUrl: './supplier-delete.component.html',
  styleUrls: ['./supplier-delete.component.css']
})
export class SupplierDeleteComponent implements OnInit {
  supplier : Supplier

  constructor(
    private supplierService: SupplierService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    const supplierId = this.route.snapshot.paramMap.get('supplierId');
    this.supplierService.readById(supplierId).subscribe((supplier) => {
    this.supplier = supplier;
    console.log(supplier);

    });
  }

  deleteSupplier(): void {
    this.supplierService.delete(this.supplier.supplierId).subscribe(() => {
    this.supplierService.showMessage("Fornecedor excluido com sucesso!");
    this.router.navigate(["/supplier"]);
    });
  }

  cancel(): void {
    this.supplierService.showMessage("Operação cancelada!");
   this.router.navigate(["/supplier"]);
 } 

}
