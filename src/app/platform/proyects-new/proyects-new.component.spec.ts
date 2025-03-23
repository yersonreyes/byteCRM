import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsNewComponent } from './proyects-new.component';

describe('ProyectsNewComponent', () => {
  let component: ProyectsNewComponent;
  let fixture: ComponentFixture<ProyectsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectsNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
