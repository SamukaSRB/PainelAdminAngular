import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY  } from "rxjs";
import { Supplier } from 'src/app/models/supplier';
import { MatSnackBar } from "@angular/material/snack-bar";
// import { EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SupplierService { 

 baseUrl = "https://localhost:7012/api/supplier";



  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string,  isError: boolean = false): void {
    this.snackBar.open(msg, 'X' ,{
      duration :10000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    })
  }

  create(supplier:Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.baseUrl, supplier).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

  read(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

  readById(supplierId:string): Observable<Supplier> {
    const url = `${this.baseUrl}/${supplierId}`;
    return this.http.get<Supplier>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );   
  }

  delete(supplierId: number): Observable<Supplier> {
    const url = `${this.baseUrl}/${supplierId}`;
    return this.http.delete<Supplier>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }
  
  updateSupplier(supplier: Supplier): Observable<Supplier> {
    const url = `${this.baseUrl}/${supplier.supplierId}`;      
    return this.http.put<Supplier>(url, supplier).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  } 

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }


}
