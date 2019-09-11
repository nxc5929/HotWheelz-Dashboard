import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeItemComponent } from './realtime-item.component';

describe('RealtimeItemComponent', () => {
  let component: RealtimeItemComponent;
  let fixture: ComponentFixture<RealtimeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
