import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { queue } from '../../src/utilities/await';

describe('Unit testing for module autoplay...', () => {
  let position = 0;
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    position = 0;
    sliderm = null;
  });

  test('Set the direction to left.', () => {
    jest.useFakeTimers();

    sliderm = new Sliderm('.sliderm', {
      columns: 4,
      loop: true,
      autoplay: true,
      _autoplay: {
        direction: 'left',
        duration: 5000,
      },
    });

    position = sliderm.getPosition();
    expect(position).toBe(1);

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(7);
      sliderm.destory();
    }, 12000);

    jest.runAllTimers();
  });

  test('Set the direction to right.', () => {
    jest.useFakeTimers();

    sliderm = new Sliderm('.sliderm', {
      columns: 4,
      loop: true,
      autoplay: true,
      _autoplay: {
        direction: 'right',
        duration: 5000,
      },
    });

    position = sliderm.getPosition();
    expect(position).toBe(1);

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(3);
      sliderm.destory();
    }, 12000);

    jest.runAllTimers();
  });
});
