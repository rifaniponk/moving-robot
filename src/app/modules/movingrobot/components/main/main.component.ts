import { Locator } from './../../models/locator';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movingrobot',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input()
  size: number = 5;

  locator: Locator = new Locator(this.size);

  constructor() {}

  ngOnInit(): void {}
}
