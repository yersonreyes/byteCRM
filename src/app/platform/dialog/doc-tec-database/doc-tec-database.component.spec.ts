import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTecDatabaseComponent } from './doc-tec-database.component';

describe('DocTecDatabaseComponent', () => {
  let component: DocTecDatabaseComponent;
  let fixture: ComponentFixture<DocTecDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTecDatabaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTecDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
