import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenmoreComponent } from './renmore.component';

describe('RenmoreComponent', () => {
  let component: RenmoreComponent;
  let fixture: ComponentFixture<RenmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
