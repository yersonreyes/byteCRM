import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionNewComponent } from './facturacion-new.component';

describe('FacturacionNewComponent', () => {
  let component: FacturacionNewComponent;
  let fixture: ComponentFixture<FacturacionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturacionNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
