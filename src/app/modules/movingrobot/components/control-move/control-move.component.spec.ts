import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';

import { ControlMoveComponent } from './control-move.component';

describe('ControlMoveComponent', () => {
  let component: ControlMoveComponent;
  let fixture: ComponentFixture<ControlMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlMoveComponent],
      providers: [NgEventBus, FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
