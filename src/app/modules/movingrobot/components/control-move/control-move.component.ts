import { Component, OnInit } from '@angular/core';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-control-move',
  templateUrl: './control-move.component.html',
  styleUrls: ['./control-move.component.scss'],
})
export class ControlMoveComponent implements OnInit {
  fa = { faUndo };
  constructor(private eventBus: NgEventBus) {}

  ngOnInit(): void {}

  move(): void {
    this.eventBus.cast('movingrobot:control:action', 'move');
  }

  rotate(to: 'left' | 'right'): void {
    this.eventBus.cast('movingrobot:control:action', to);
  }

  report(): void {
    this.eventBus.cast('movingrobot:control:action', 'report');
  }
}
