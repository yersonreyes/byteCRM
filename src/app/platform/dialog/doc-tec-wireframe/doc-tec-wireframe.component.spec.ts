import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTecWireframeComponent } from './doc-tec-wireframe.component';

describe('DocTecWireframeComponent', () => {
  let component: DocTecWireframeComponent;
  let fixture: ComponentFixture<DocTecWireframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTecWireframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTecWireframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
