import { NgModule } from '@angular/core';
import { HomeComponent } from "./views/home/home.component";

import { CustomerComponent } from "./views/customer/customer.component";
import { CustomerCreateComponent } from "./components/customer/customer-create/customer-create.component";
import { CustomerUpdateComponent } from "./components/customer/customer-update/customer-update.component";
import { CustomerDeleteComponent } from "./components/customer/customer-delete/customer-delete.component";

import { SupplierComponent } from "./views/supplier/supplier.component";
import { SupplierCreateComponent } from "./components/supplier/supplier-create/supplier-create.component";
import { SupplierUpdateComponent } from "./components/supplier/supplier-update/supplier-update.component";
import { SupplierDeleteComponent } from "./components/supplier/supplier-delete/supplier-delete.component";

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "customer",
    component: CustomerComponent
  },
  {
    path: "customer/create",
    component: CustomerCreateComponent
  },
  {
    path: "customer/update/:customerId",
    component: CustomerUpdateComponent
  }, 
  {
    path: "customer/delete/:customerId",
    component: CustomerDeleteComponent
  },

  {
    path: "supplier",
    component: SupplierComponent
  },
   {
    path: "supplier/create",
    component: SupplierCreateComponent
  },

  {
    path: "supplier/update/:supplierId",
    component: SupplierUpdateComponent
  }, 
  {
    path: "supplier/delete/:supplierId",
    component: SupplierDeleteComponent
  },
  
  
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
