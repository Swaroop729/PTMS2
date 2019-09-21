import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentNotificationComponent } from './incident-notification.component';

describe('IncidentNotificationComponent', () => {
  let component: IncidentNotificationComponent;
  let fixture: ComponentFixture<IncidentNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
