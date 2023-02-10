import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private router: Router) {
    routeUrl: '/supplier'
   }

  ngOnInit(): void {
  }
  
  navigateToSupplierCreate(): void {
    this.router.navigate(['/supplier/create'])
  }

}
