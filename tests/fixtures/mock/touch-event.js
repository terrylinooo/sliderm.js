/* eslint-disable class-methods-use-this */
/**
 * Mock TouchEvent
 */
export default class TouchEvent {
  constructor(type, options) {
    this.type = type;
    this.changedTouches = options.changedTouches;
  }

  preventDefault() {
    return false;
  }
}
