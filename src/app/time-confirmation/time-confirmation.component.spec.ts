import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConfirmationComponent } from './time-confirmation.component';

describe('TimeConfirmationComponent', () => {
  let component: TimeConfirmationComponent;
  let fixture: ComponentFixture<TimeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
