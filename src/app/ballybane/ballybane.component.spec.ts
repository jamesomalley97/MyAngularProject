import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallybaneComponent } from './ballybane.component';

describe('BallybaneComponent', () => {
  let component: BallybaneComponent;
  let fixture: ComponentFixture<BallybaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallybaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallybaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
