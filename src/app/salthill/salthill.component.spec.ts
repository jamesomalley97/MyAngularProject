import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalthillComponent } from './salthill.component';

describe('SalthillComponent', () => {
  let component: SalthillComponent;
  let fixture: ComponentFixture<SalthillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalthillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalthillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
