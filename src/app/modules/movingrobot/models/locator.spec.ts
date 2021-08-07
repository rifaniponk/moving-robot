import { Log } from './log';
import { Place, Direction } from './place';
import { Locator } from './locator';

describe('Locator::place Test', () => {
  it('should place the robot into the right position', () => {
    const locator = new Locator(5);
    const success = locator.place(4, 4, Direction.WEST);

    const expectedCurrentLocation = new Place(4, 4, Direction.WEST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);
    expect(success).toEqual(true);
  });

  it('should ignore the invalid location place', () => {
    const locator = new Locator(5);
    const success = locator.place(5, 5, Direction.WEST);

    expect(locator.currentLocation).toEqual(undefined);
    expect(success).toEqual(false);
  });
});

describe('Locator::move Test', () => {
  it('should move the robot into the right position', () => {
    // no initial place. invalid movement
    let locator = new Locator(5);
    const s = locator.move();
    expect(s).toEqual(false);
    expect(locator.logs.length).toEqual(1);

    // facing EAST & move 2x
    locator = new Locator(5);
    locator.place(0, 0, Direction.EAST);
    locator.move();
    locator.move();
    let expectedCurrentLocation = new Place(2, 0, Direction.EAST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    // facing NORTH & move 5x
    locator = new Locator(5);
    locator.place(1, 0, Direction.NORTH);
    locator.move();
    locator.move();
    locator.move();
    locator.move();
    locator.move();
    expectedCurrentLocation = new Place(1, 4, Direction.NORTH);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    // facing WEST & move 1x
    locator = new Locator(5);
    locator.place(1, 1, Direction.WEST);
    locator.move();
    expectedCurrentLocation = new Place(0, 1, Direction.WEST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    // facing SOUTH & move 1x
    locator = new Locator(5);
    locator.place(2, 2, Direction.SOUTH);
    locator.move();
    expectedCurrentLocation = new Place(2, 1, Direction.SOUTH);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);
  });

  it('should ignore the invalid location place', () => {
    // facing EAST & move 3x
    let locator = new Locator(5);
    locator.place(2, 2, Direction.EAST);
    let s1 = locator.move();
    let s2 = locator.move();
    let s3 = locator.move(); // invalid movement

    let expectedCurrentLocation = new Place(4, 2, Direction.EAST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);
    expect(s1).toEqual(true);
    expect(s2).toEqual(true);
    expect(s3).toEqual(false);

    // facing WEST & move 3x
    locator = new Locator(5);
    locator.place(2, 2, Direction.WEST);
    s1 = locator.move();
    s2 = locator.move();
    s3 = locator.move(); // invalid movement

    expectedCurrentLocation = new Place(0, 2, Direction.WEST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);
    expect(s1).toEqual(true);
    expect(s2).toEqual(true);
    expect(s3).toEqual(false);

    // facing NORTH & move 3x
    locator = new Locator(5);
    locator.place(2, 2, Direction.NORTH);
    s1 = locator.move();
    s2 = locator.move();
    s3 = locator.move(); // invalid movement

    expectedCurrentLocation = new Place(2, 4, Direction.NORTH);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);
    expect(s1).toEqual(true);
    expect(s2).toEqual(true);
    expect(s3).toEqual(false);

    // facing SOUTH & move 3x
    locator = new Locator(5);
    locator.place(2, 2, Direction.SOUTH);
    s1 = locator.move();
    s2 = locator.move();
    s3 = locator.move(); // invalid movement

    expectedCurrentLocation = new Place(2, 0, Direction.SOUTH);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);
    expect(s1).toEqual(true);
    expect(s2).toEqual(true);
    expect(s3).toEqual(false);
  });
});

describe('Locator::left Test', () => {
  it('should rotate the robot into the correct direction', () => {
    // no initial place. invalid movement
    let locator = new Locator(5);
    const s = locator.left();
    expect(s).toEqual(false);
    expect(locator.logs.length).toEqual(1);

    locator = new Locator(5);
    locator.place(0, 0, Direction.EAST);
    locator.left();
    let expectedCurrentLocation = new Place(0, 0, Direction.NORTH);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    locator.left();
    expectedCurrentLocation = new Place(0, 0, Direction.WEST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    locator.left();
    expectedCurrentLocation = new Place(0, 0, Direction.SOUTH);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    locator.left();
    expectedCurrentLocation = new Place(0, 0, Direction.EAST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);
  });
});

describe('Locator::right Test', () => {
  it('should rotate the robot into the correct direction', () => {
    // no initial place. invalid movement
    let locator = new Locator(5);
    const s = locator.right();
    expect(s).toEqual(false);
    expect(locator.logs.length).toEqual(1);

    locator = new Locator(5);
    locator.place(0, 0, Direction.EAST);
    locator.right();
    let expectedCurrentLocation = new Place(0, 0, Direction.SOUTH);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    locator.right();
    expectedCurrentLocation = new Place(0, 0, Direction.WEST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    locator.right();
    expectedCurrentLocation = new Place(0, 0, Direction.NORTH);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);

    locator.right();
    expectedCurrentLocation = new Place(0, 0, Direction.EAST);
    expect(locator.currentLocation).toEqual(expectedCurrentLocation);
  });
});

describe('Locator::report Test', () => {
  it('should return the current location & add it into the logs', () => {
    let locator = new Locator(5);
    locator.place(1, 2, Direction.WEST);
    const r = locator.report();
    expect(locator.currentLocation).toEqual(r);
    expect(locator.logs.length).toEqual(2);
    const nl = new Log('report', true, locator.currentLocation);
    expect(locator.logs[locator.logs.length - 1]).toEqual(nl);
  });
});
