export enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}
export class Place {
  x: number; // start from 0
  y: number; // start from 0
  f: Direction;

  constructor(x: number, y: number, f: Direction) {
    this.x = x;
    this.y = y;
    this.f = f;
  }

  clone(): Place {
    return new Place(this.x, this.y, this.f);
  }
}
