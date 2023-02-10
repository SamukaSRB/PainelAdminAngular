import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from  '@angular/material/card';
import { SupplierComponent } from './views/supplier/supplier.component';
import { MatButtonModule } from  '@angular/material/button';
import { SupplierReadComponent } from './components/supplier/supplier-read/supplier-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SupplierCreateComponent } from './components/supplier/supplier-create/supplier-create.component';
import { SupplierUpdateComponent } from './components/supplier/supplier-update/supplier-update.component';
import { SupplierDeleteComponent } from './components/supplier/supplier-delete/supplier-delete.component';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { CustomerReadComponent } from './components/customer/customer-read/customer-read.component';
import { CustomerComponent } from './views/customer/customer.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    SupplierComponent,
    SupplierReadComponent,
    SupplierCreateComponent,
    SupplierUpdateComponent,
    SupplierDeleteComponent,
    CustomerReadComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
   
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    MatSnackBarModule,
    MatSelectModule
    
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
