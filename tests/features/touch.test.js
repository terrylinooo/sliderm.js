import html from '../fixtures/html';
import touchEventFactory from '../fixtures/mock/touch-event-factory';
import Sliderm from '../../src/sliderm';
import { queue } from '../../src/utilities/await';

describe('Unit testing for module touch...', () => {
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

    position = sliderm.getPosition();
    expect(position).toBe(1);

    const sliderEvent = sliderm.domEvents.filter((e) => e.events.touchstart !== undefined)[0];
    sliderEvent.mock('touchstart', touchEventFactory('touchstart', 'left', 0));
    sliderEvent.mock('touchmove', touchEventFactory('touchmove', 'left', 15));
    sliderEvent.mock('touchend', touchEventFactory('touchend', 'left', 30));
    position = sliderm.getPosition();
    expect(position).toBe(2);
  });

  test('Swipe right and check the position number.', () => {
    sliderm = new Sliderm('.sliderm', {
      touch: true,
      loop: true,
    });

    jest.useFakeTimers();

    position = sliderm.getPosition();
    expect(position).toBe(1);

    const sliderEvent = sliderm.domEvents.filter((e) => e.events.touchstart !== undefined)[0];
    sliderEvent.mock('touchstart', touchEventFactory('touchstart', 'right', 0));
    sliderEvent.mock('touchmove', touchEventFactory('touchmove', 'right', 15));
    sliderEvent.mock('touchend', touchEventFactory('touchend', 'right', 30));
    position = sliderm.getPosition();
    expect(position).toBe(0);

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(8);
    }, 2000);

    jest.runAllTimers();
  });

  test('Turn off the touch module.', () => {
    sliderm = new Sliderm('.sliderm', {
      touch: false,
    });
  });

  test('Incorrect posture to swipe right.', () => {
    sliderm = new Sliderm('.sliderm', {
      touch: true,
      loop: true,
    });

    jest.useFakeTimers();

    position = sliderm.getPosition();
    expect(position).toBe(1);

    const sliderEvent = sliderm.domEvents.filter((e) => e.events.touchstart !== undefined)[0];
    sliderEvent.mock('touchstart', touchEventFactory('touchstart', 'right', 0));
    sliderEvent.mock('touchmove', touchEventFactory('touchmove', 'right', 2));
    sliderEvent.mock('touchend', touchEventFactory('touchend', 'right', 5));
    position = sliderm.getPosition();

    // The distance of swipe is too short, so the position won't be changed.
    expect(position).toBe(1);

    jest.runAllTimers();
  });
});
