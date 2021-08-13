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
    this.refreshCurrentRobotPosition();
  }

  ngOnInit(): void {
    this.locator.size = this.size;
    this.eventBus.on('movingrobot:control:place').subscribe((md: MetaData) => {
      this.newPlace(0, md.data.newPlace);
    });
    this.eventBus.on('movingrobot:control:action').subscribe((md: MetaData) => {
      if (md.data === 'move') {
        this.locator.move(md.data.robotId);
      } else if (md.data.action === 'left') {
        this.locator.left(md.data.robotId);
      } else if (md.data.action === 'right') {
        this.locator.right(md.data.robotId);
      } else if (md.data.action === 'report') {
        this.locator.report(md.data.robotId);
      }
      this.refreshCurrentRobotPosition();
    });

    this.refreshCurrentRobotPosition();
    this.refreshCurrentRobotPosition();
  }

  newPlace(robotId: number, np: Place): void {
    this.locator.place(robotId, np.x, np.y, np.f);
    this.refreshCurrentRobotPosition();
  }

  refreshCurrentRobotPosition(): void {
    // reset robot position
    this.locationTables = this.getDefaultLocationTables();
    

    // update robot location
    [0,1].forEach(robotId => {
      if (this.locator.currentLocations[robotId]) {
        for (let i = 0; i < this.size; i++) {
          for (let j = 0; j < this.size; j++) {
            if (
              i === this.locator.currentLocations[robotId].y &&
              j === this.locator.currentLocations[robotId].x
            ) {
              this.locationTables[i][j] = robotId;
            }
          }
        }
      }
    })
  }

  getDefaultLocationTables() {
    return new Array(this.size)
      .fill(false)
      .map(() => new Array(this.size).fill(-1));
  }
}
