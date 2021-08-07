import { Place } from './place';

export type Action = 'place' | 'move' | 'left' | 'right' | 'report';

export class Log {
  action: Action;
  newPosition?: Place;
  isSuccess: boolean;

  constructor(action: Action, isSuccess: boolean, np?: Place) {
    this.action = action;
    this.newPosition = np;
    this.isSuccess = isSuccess;
  }

  toString() {
    let result = this.action.toUpperCase() + ' => ';
    result += this.newPosition?.toString();
    return result;
  }
}
