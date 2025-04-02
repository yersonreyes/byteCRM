import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTecFrontendComponent } from './doc-tec-frontend.component';

describe('DocTecFrontendComponent', () => {
  let component: DocTecFrontendComponent;
  let fixture: ComponentFixture<DocTecFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTecFrontendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTecFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
