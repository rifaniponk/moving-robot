import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';

import { ControlPlaceComponent } from './control-place.component';

describe('ControlPlaceComponent', () => {
  let component: ControlPlaceComponent;
  let fixture: ComponentFixture<ControlPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlPlaceComponent],
      providers: [NgEventBus, FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
