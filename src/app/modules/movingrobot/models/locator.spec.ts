import { Log } from './log';
import { Place, Direction } from './place';
import { Locator } from './locator';

describe('Locator::place Test', () => {
  it('should place the robot into the right position', () => {
    const locator = new Locator(5);
    const success = locator.place(0, 4, 4, Direction.WEST);

    const expectedCurrentLocation = new Place(4, 4, Direction.WEST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);
    expect(success).toEqual(true);
  });

  it('should ignore the invalid location place', () => {
    const locator = new Locator(5);
    const success = locator.place(0, 5, 5, Direction.WEST);

    if (!locator.currentLocations[0]) {
      expect(locator.currentLocations[0]).toEqual(undefined);
    }
    expect(success).toEqual(false);
  });
});

describe('Locator::move Test', () => {
  it('should move the robot into the right position', () => {
    // no initial place. invalid movement
    let locator = new Locator(5);
    const s = locator.move(0);
    expect(s).toEqual(false);
    expect(locator.logs.length).toEqual(1);

    // facing EAST & move 2x
    locator = new Locator(5);
    locator.place(0, 0, 0, Direction.EAST);
    locator.move(0);
    locator.move(0);
    let expectedCurrentLocation = new Place(2, 0, Direction.EAST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    // facing NORTH & move 5x
    locator = new Locator(5);
    locator.place(0, 1, 0, Direction.NORTH);
    locator.move(0);
    locator.move(0);
    locator.move(0);
    locator.move(0);
    locator.move(0);
    expectedCurrentLocation = new Place(1, 4, Direction.NORTH);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    // facing WEST & move 1x
    locator = new Locator(5);
    locator.place(0, 1, 1, Direction.WEST);
    locator.move(0);
    expectedCurrentLocation = new Place(0, 1, Direction.WEST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    // facing SOUTH & move 1x
    locator = new Locator(5);
    locator.place(0, 2, 2, Direction.SOUTH);
    locator.move(0);
    expectedCurrentLocation = new Place(2, 1, Direction.SOUTH);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);
  });

  it('should ignore the invalid location place', () => {
    // facing EAST & move 3x
    let locator = new Locator(5);
    locator.place(0, 2, 2, Direction.EAST);
    let s1 = locator.move(0);
    let s2 = locator.move(0);
    let s3 = locator.move(0); // invalid movement

    let expectedCurrentLocation = new Place(4, 2, Direction.EAST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);
    expect(s1).toEqual(true);
    expect(s2).toEqual(true);
    expect(s3).toEqual(false);

    // facing WEST & move 3x
    locator = new Locator(5);
    locator.place(0, 2, 2, Direction.WEST);
    s1 = locator.move(0);
    s2 = locator.move(0);
    s3 = locator.move(0); // invalid movement

    expectedCurrentLocation = new Place(0, 2, Direction.WEST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);
    expect(s1).toEqual(true);
    expect(s2).toEqual(true);
    expect(s3).toEqual(false);

    // facing NORTH & move 3x
    locator = new Locator(5);
    locator.place(0, 2, 2, Direction.NORTH);
    s1 = locator.move(0);
    s2 = locator.move(0);
    s3 = locator.move(0); // invalid movement

    expectedCurrentLocation = new Place(2, 4, Direction.NORTH);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);
    expect(s1).toEqual(true);
    expect(s2).toEqual(true);
    expect(s3).toEqual(false);

    // facing SOUTH & move 3x
    locator = new Locator(5);
    locator.place(0, 2, 2, Direction.SOUTH);
    s1 = locator.move(0);
    s2 = locator.move(0);
    s3 = locator.move(0); // invalid movement

    expectedCurrentLocation = new Place(2, 0, Direction.SOUTH);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);
    expect(s1).toEqual(true);
    expect(s2).toEqual(true);
    expect(s3).toEqual(false);
  });
});

describe('Locator::left Test', () => {
  it('should rotate the robot into the correct direction', () => {
    // no initial place. invalid movement
    let locator = new Locator(5);
    const s = locator.left(0);
    expect(s).toEqual(false);
    expect(locator.logs.length).toEqual(1);

    locator = new Locator(5);
    locator.place(0, 0, 0, Direction.EAST);
    locator.left(0);
    let expectedCurrentLocation = new Place(0, 0, Direction.NORTH);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    locator.left(0);
    expectedCurrentLocation = new Place(0, 0, Direction.WEST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    locator.left(0);
    expectedCurrentLocation = new Place(0, 0, Direction.SOUTH);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    locator.left(0);
    expectedCurrentLocation = new Place(0, 0, Direction.EAST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);
  });
});

describe('Locator::right Test', () => {
  it('should rotate the robot into the correct direction', () => {
    // no initial place. invalid movement
    let locator = new Locator(5);
    const s = locator.right(0);
    expect(s).toEqual(false);
    expect(locator.logs.length).toEqual(1);

    locator = new Locator(5);
    locator.place(0, 0, 0, Direction.EAST);
    locator.right(0);
    let expectedCurrentLocation = new Place(0, 0, Direction.SOUTH);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    locator.right(0);
    expectedCurrentLocation = new Place(0, 0, Direction.WEST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    locator.right(0);
    expectedCurrentLocation = new Place(0, 0, Direction.NORTH);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);

    locator.right(0);
    expectedCurrentLocation = new Place(0, 0, Direction.EAST);
    expect(locator.currentLocations[0]).toEqual(expectedCurrentLocation);
  });
});

describe('Locator::report Test', () => {
  it('should return the current location & add it into the logs', () => {
    let locator = new Locator(5);
    locator.place(0, 1, 2, Direction.WEST);
    const r = locator.report(0);
    if (locator.currentLocations[0] && r) {
      expect(locator.currentLocations[0]).toEqual(r);
    }
    // if (!locator.currentLocations[0] || r) {
    //   expect(false).toEqual(true);
    // }
    expect(locator.logs.length).toEqual(2);
    const nl = new Log('report', true, locator.currentLocations[0]);
    expect(locator.logs[locator.logs.length - 1]).toEqual(nl);
  });
});
