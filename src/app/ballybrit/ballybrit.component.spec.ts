import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallybritComponent } from './ballybrit.component';

describe('BallybritComponent', () => {
  let component: BallybritComponent;
  let fixture: ComponentFixture<BallybritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallybritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallybritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
