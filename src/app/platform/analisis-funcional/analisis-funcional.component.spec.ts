import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisFuncionalComponent } from './analisis-funcional.component';

describe('AnalisisFuncionalComponent', () => {
  let component: AnalisisFuncionalComponent;
  let fixture: ComponentFixture<AnalisisFuncionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisFuncionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
