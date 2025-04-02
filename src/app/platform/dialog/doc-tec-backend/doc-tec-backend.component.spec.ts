import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTecBackendComponent } from './doc-tec-backend.component';

describe('DocTecBackendComponent', () => {
  let component: DocTecBackendComponent;
  let fixture: ComponentFixture<DocTecBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTecBackendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTecBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
