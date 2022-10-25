import TouchEvent from './touch-event';
import Touch from './touch';

/**
 * Create a mocked TouchEvent object.
 *
 * @param {String} type
 * @param {String} direction
 * @param {Number} distance
 * @return {Object}
 */
export default function touchEventFactory(type, direction, distance) {
  const options = {};
  const touches = [];
  let touch = null;

  if (type === 'touchstart' || type === 'touchmove') {
    touch = new Touch(300);
  } else if (type === 'touchend') {
    if (direction === 'right') {
      touch = new Touch(300 - distance);
    } else {
      touch = new Touch(300 + distance);
    }
  }

  touches.push(touch);
  options.changedTouches = touches;
  return new TouchEvent(type, options);
}
