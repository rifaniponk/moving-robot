import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPlaceComponent } from './control-place.component';

describe('ControlPlaceComponent', () => {
  let component: ControlPlaceComponent;
  let fixture: ComponentFixture<ControlPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPlaceComponent ]
    })
    .compileComponents();
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
