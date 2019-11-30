import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhomesComponent } from './allhomes.component';

describe('AllhomesComponent', () => {
  let component: AllhomesComponent;
  let fixture: ComponentFixture<AllhomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllhomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllhomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
