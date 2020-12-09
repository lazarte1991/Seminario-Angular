import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazarteProductsComponent } from './lazarte-products.component';

describe('LazarteProductsComponent', () => {
  let component: LazarteProductsComponent;
  let fixture: ComponentFixture<LazarteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazarteProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazarteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
