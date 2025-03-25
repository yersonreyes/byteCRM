import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionAddComponent } from './facturacion-add.component';

describe('FacturacionAddComponent', () => {
  let component: FacturacionAddComponent;
  let fixture: ComponentFixture<FacturacionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturacionAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
