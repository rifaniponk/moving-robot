import { Component, Input, OnInit } from '@angular/core';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-control-move',
  templateUrl: './control-move.component.html',
  styleUrls: ['./control-move.component.scss'],
})
export class ControlMoveComponent implements OnInit {
  @Input()
  robotId: number = 0;

  fa = { faUndo };
  constructor(private eventBus: NgEventBus) {}

  ngOnInit(): void {}

  move(): void {
    this.eventBus.cast('movingrobot:control:action', {action: 'move', robotId: this.robotId});
  }

  rotate(to: 'left' | 'right'): void {
    this.eventBus.cast('movingrobot:control:action', {action: to, robotId: this.robotId});
  }

  report(): void {
    this.eventBus.cast('movingrobot:control:action', {action: 'report', robotId: this.robotId});
  }
}
