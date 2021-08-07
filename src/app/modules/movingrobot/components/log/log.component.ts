import { Log } from './../../models/log';
import { Component, Input, OnInit } from '@angular/core';
import {
  faCheck,
  faExclamationCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  @Input()
  logs: Log[] = [];

  fa = {
    check: faCheck,
    exclamationCircle: faExclamationCircle,
    infoCircle: faInfoCircle,
  };

  constructor() {}

  ngOnInit(): void {}
}
