import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacionTecnicaComponent } from './documentacion-tecnica.component';

describe('DocumentacionTecnicaComponent', () => {
  let component: DocumentacionTecnicaComponent;
  let fixture: ComponentFixture<DocumentacionTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentacionTecnicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentacionTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
