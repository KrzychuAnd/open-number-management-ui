import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { profileComponent } from './profile.component';

describe('profileComponent', () => {
  let component: profileComponent;
  let fixture: ComponentFixture<profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
