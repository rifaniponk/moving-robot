import { Direction, Place } from './../../models/place';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  isControlError,
  touchAllControl,
} from '../../../cores/helpers/validator';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-control-place',
  templateUrl: './control-place.component.html',
  styleUrls: ['./control-place.component.scss'],
})
export class ControlPlaceComponent implements OnInit {
  @Input()
  robotId: number = 0;

  directions: { key: Direction; value: string }[] = [
    {
      key: Direction.NORTH,
      value: 'NORTH',
    },
    {
      key: Direction.EAST,
      value: 'EAST',
    },
    {
      key: Direction.SOUTH,
      value: 'SOUTH',
    },
    {
      key: Direction.WEST,
      value: 'WEST',
    },
  ];
  form: FormGroup;

  constructor(private fb: FormBuilder, private eventBus: NgEventBus) {
    this.form = this.fb.group({
      coordinate: [
        null,
        [
          Validators.required,
          // coordinate must be in x,y format
          Validators.pattern(/^\d{1,},\d{1,}$/),
        ],
      ],
      direction: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    touchAllControl(this.form);
    if (!this.form.valid) {
      return;
    }

    const x = Number(this.form.value.coordinate.split(',')[0]);
    const y = Number(this.form.value.coordinate.split(',')[1]);
    const newPlace = new Place(x, y, this.form.value.direction);

    this.eventBus.cast('movingrobot:control:place', {action: 'place', newPlace, robotId: this.robotId});
  }

  isControlError(controlName: string): boolean {
    return isControlError(this.form, controlName);
  }
}
