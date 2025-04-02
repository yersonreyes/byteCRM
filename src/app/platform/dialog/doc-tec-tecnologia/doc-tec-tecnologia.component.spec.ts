import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTecTecnologiaComponent } from './doc-tec-tecnologia.component';

describe('DocTecTecnologiaComponent', () => {
  let component: DocTecTecnologiaComponent;
  let fixture: ComponentFixture<DocTecTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTecTecnologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTecTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
