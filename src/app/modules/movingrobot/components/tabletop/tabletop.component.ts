import { Locator } from './../../models/locator';
import { Component, Input, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { Place } from '../../models/place';
import { MetaData } from 'ng-event-bus/lib/meta-data';

@Component({
  selector: 'app-tabletop',
  templateUrl: './tabletop.component.html',
  styleUrls: ['./tabletop.component.scss'],
})
export class TabletopComponent implements OnInit {
  @Input()
  size: number = 5;

  @Input()
  locator: Locator = new Locator(this.size);

  // init array of current robot location with dimension square [size]
  // default all to be false
  locationTables = this.getDefaultLocationTables();

  constructor(private eventBus: NgEventBus) {
    this.refreshCurrentRobotPosition();
  }

  ngOnInit(): void {
    this.eventBus.on('movingrobot:control:place').subscribe((md: MetaData) => {
      this.newPlace(md.data);
    });
    this.refreshCurrentRobotPosition();
  }

  newPlace(np: Place): void {
    this.locator.place(np.x, np.y, np.f);
    this.refreshCurrentRobotPosition();
  }

  refreshCurrentRobotPosition(): void {
    // reset robot position
    this.locationTables = this.getDefaultLocationTables();

    // update robot location
    if (this.locator.currentLocation) {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (
            i === this.locator.currentLocation.y &&
            j === this.locator.currentLocation?.x
          ) {
            this.locationTables[i][j] = true;
          }
        }
      }
    }
  }

  getDefaultLocationTables() {
    return new Array(this.size)
      .fill(false)
      .map(() => new Array(this.size).fill(false));
  }
}
