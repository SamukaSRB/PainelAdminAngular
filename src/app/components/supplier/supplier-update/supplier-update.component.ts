import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.css']
})

export class SupplierUpdateComponent implements OnInit {
    
  supplier : Supplier

  constructor(private supplierService : SupplierService,  private router: Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
    const supplierId = this.route.snapshot.paramMap.get('supplierId');
    
    this.supplierService.readById(supplierId).subscribe((supplier) => {
      this.supplier = supplier;
      console.log(supplier);
    });
  }

  update(): void {
    this.supplierService.updateSupplier(this.supplier).subscribe(() => {
    this.supplierService.showMessage("Fornecedor atualizado com sucesso!");
      this.router.navigate(["/supplier"])
    });
  }

  cancel(): void {
     this.supplierService.showMessage("Operação cancelada!");
    this.router.navigate(["/supplier"]);
  } 

}
