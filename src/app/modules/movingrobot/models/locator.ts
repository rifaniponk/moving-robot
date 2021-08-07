import { Log, Action } from './log';
import { Place, Direction } from './place';

export class Locator {
  currentLocation?: Place;
  logs: Log[] = [];

  private size: number; // size of square tabletop

  constructor(size: number) {
    this.size = size;
  }

  // place will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
  place(x: number, y: number, f: Direction): boolean {
    const newLoc = new Place(x, y, f);
    if (!this.validate('place', newLoc)) {
      return false;
    }
    this.currentLocation = newLoc;
    this.logs.push(new Log('place', true, newLoc));
    return true;
  }

  // move the robot one unit forward in the direction it is currently facing
  move(): boolean {
    if (!this.currentLocation) {
      this.logs.push(new Log('move', false, undefined));
      return false;
    }

    const newLoc = this.currentLocation.clone();
    switch (this.currentLocation.f) {
      case Direction.NORTH:
        newLoc.y++;
        break;
      case Direction.EAST:
        newLoc.x++;
        break;
      case Direction.SOUTH:
        newLoc.y--;
        break;
      case Direction.WEST:
        newLoc.x--;
        break;
    }

    if (!this.validate('move', newLoc)) {
      return false;
    }

    this.currentLocation = newLoc;
    this.logs.push(new Log('move', true, newLoc));
    return true;
  }

  // will rotate the robot 90 degrees to the left
  left(): boolean {
    if (!this.currentLocation) {
      this.logs.push(new Log('left', false, undefined));
      return false;
    }

    const newLoc = this.currentLocation.clone();
    switch (this.currentLocation.f) {
      case Direction.NORTH:
        newLoc.f = Direction.WEST;
        break;
      case Direction.EAST:
        newLoc.f = Direction.NORTH;
        break;
      case Direction.SOUTH:
        newLoc.f = Direction.EAST;
        break;
      case Direction.WEST:
        newLoc.f = Direction.SOUTH;
        break;
    }

    this.currentLocation = newLoc;
    this.logs.push(new Log('left', true, newLoc));

    return true;
  }

  // will rotate the robot 90 degrees to right
  right(): boolean {
    if (!this.currentLocation) {
      this.logs.push(new Log('right', false, undefined));
      return false;
    }

    const newLoc = this.currentLocation.clone();
    switch (this.currentLocation.f) {
      case Direction.NORTH:
        newLoc.f = Direction.EAST;
        break;
      case Direction.EAST:
        newLoc.f = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        newLoc.f = Direction.WEST;
        break;
      case Direction.WEST:
        newLoc.f = Direction.NORTH;
        break;
    }

    this.currentLocation = newLoc;
    this.logs.push(new Log('right', true, newLoc));

    return true;
  }

  // report will return the robot's current location and log it
  report(): Place | undefined {
    this.logs.push(new Log('report', true, this.currentLocation));
    return this.currentLocation;
  }

  // validate the new position and log the error movement if it's not valid
  validate(action: Action, place: Place): boolean {
    if (
      place.x > this.size - 1 ||
      place.y > this.size - 1 ||
      place.x < 0 ||
      place.y < 0
    ) {
      this.logs.push(new Log(action, false, place));
      return false;
    }
    return true;
  }
}
