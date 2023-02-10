import {Customer} from 'src/app/models/customer';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, EMPTY} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = "https://localhost:7012/api/customer";


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X' ,{
      duration :10000,
      horizontalPosition: "center",
      verticalPosition: "top",      
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    })
  }

  read(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

  readById(customerId:string): Observable<Customer> {
    const url = `${this.baseUrl}/${customerId}`;
    return this.http.get<Customer>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );  
  }

  updateClient(customer: Customer): Observable<Customer> {
    const url = `${this.baseUrl}/${customer.customerId}`;      
    return this.http.put<Customer>(url, customer).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  } 

  create(customer:Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

  delete(customerId: number): Observable<Customer> {
    const url = `${this.baseUrl}/${customerId}`;
    return this.http.delete<Customer>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}
