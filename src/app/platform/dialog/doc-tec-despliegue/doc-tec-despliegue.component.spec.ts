import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTecDespliegueComponent } from './doc-tec-despliegue.component';

describe('DocTecDespliegueComponent', () => {
  let component: DocTecDespliegueComponent;
  let fixture: ComponentFixture<DocTecDespliegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTecDespliegueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTecDespliegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
