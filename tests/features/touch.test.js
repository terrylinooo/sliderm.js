import html from '../fixtures/html';
import touchEventFactory from '../fixtures/mock/touch-event-factory';
import Sliderm from '../../src/sliderm';
import { queue } from '../../src/utilities/await';

describe('Unit testing for component pagination...', () => {
  let position = 0;
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    position = 0;
    sliderm = null;
  });

  test('Swipe left and check the position number.', () => {
    sliderm = new Sliderm('.sliderm', {
      touch: true,
    });

    const touchEventStart = touchEventFactory('touchstart', 'left', 0);
    const touchEventMove = touchEventFactory('touchmove', 'left', 15);
    const touchEventEnd = touchEventFactory('touchend', 'left', 30);
    const sliderEvent = sliderm.domEvents.filter((e) => e.events.touchstart !== undefined)[0];
    position = sliderm.getPosition();
    expect(position).toBe(1);
    sliderEvent.events.touchstart(touchEventStart);
    sliderEvent.events.touchmove(touchEventMove);
    sliderEvent.events.touchend(touchEventEnd);
    position = sliderm.getPosition();
    expect(position).toBe(2);
  });

  test('Swipe right and check the position number.', () => {
    sliderm = new Sliderm('.sliderm', {
      touch: true,
      loop: true,
    });

    jest.useFakeTimers();

    const touchEventStart = touchEventFactory('touchstart', 'right', 0);
    const touchEventMove = touchEventFactory('touchmove', 'right', 15);
    const touchEventEnd = touchEventFactory('touchend', 'right', 30);
    const sliderEvent = sliderm.domEvents.filter((e) => e.events.touchstart !== undefined)[0];
    position = sliderm.getPosition();
    expect(position).toBe(1);
    sliderEvent.events.touchstart(touchEventStart);
    sliderEvent.events.touchmove(touchEventMove);
    sliderEvent.events.touchend(touchEventEnd);
    position = sliderm.getPosition();
    expect(position).toBe(0);

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(8);
    }, 2000);

    jest.runAllTimers();
  });
});
