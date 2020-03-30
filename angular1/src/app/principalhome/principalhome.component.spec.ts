import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalhomeComponent } from './principalhome.component';

describe('PrincipalhomeComponent', () => {
  let component: PrincipalhomeComponent;
  let fixture: ComponentFixture<PrincipalhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
