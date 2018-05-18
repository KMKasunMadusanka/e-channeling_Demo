import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelingPageComponent } from './channeling-page.component';

describe('ChannelingPageComponent', () => {
  let component: ChannelingPageComponent;
  let fixture: ComponentFixture<ChannelingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
