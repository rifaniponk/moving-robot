import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgEventBus } from 'ng-event-bus';

import { TabletopComponent } from './tabletop.component';

describe('TabletopComponent', () => {
  let component: TabletopComponent;
  let fixture: ComponentFixture<TabletopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabletopComponent],
      providers: [NgEventBus],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
