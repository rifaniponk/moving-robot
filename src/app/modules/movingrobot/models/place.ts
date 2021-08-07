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

  // return (x,y: NORTH)
  toString(): string {
    let result = String(this.x) + ',' + String(this.y) + ': ';
    switch (this.f) {
      case Direction.NORTH:
        result += 'NORTH';
        break;
      case Direction.EAST:
        result += 'EAST';
        break;
      case Direction.SOUTH:
        result += 'SOUTH';
        break;
      case Direction.WEST:
        result += 'WEST';
        break;
    }
    return '(' + result + ')';
  }
}
