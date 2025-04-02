import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTecRepoComponent } from './doc-tec-repo.component';

describe('DocTecRepoComponent', () => {
  let component: DocTecRepoComponent;
  let fixture: ComponentFixture<DocTecRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTecRepoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTecRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
