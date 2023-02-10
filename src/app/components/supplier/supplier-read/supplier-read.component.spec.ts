import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierReadComponent } from './supplier-read.component';

describe('SupplierReadComponent', () => {
  let component: SupplierReadComponent;
  let fixture: ComponentFixture<SupplierReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
