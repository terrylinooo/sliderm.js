import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { queue } from '../../src/utilities/await';

describe('Unit testing for module slide...', () => {
  let sliderm = null;
  let position = 0;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  // slide single item.

  test('Set the option loop to be false, and slide right.', () => {
    sliderm = new Sliderm('.sliderm', {
      loop: false,
    });

    sliderm.slideTo(8);
    position = sliderm.getPosition();
    expect(position).toBe(8);

    sliderm.slideTo('>');
    position = sliderm.getPosition();
    expect(position).toBe(8);
  });

  test('Set the option loop to be true, and slide right.', () => {
    sliderm = new Sliderm('.sliderm', {
      loop: true,
    });

    sliderm.slideTo(8);
    position = sliderm.getPosition();
    expect(position).toBe(8);

    jest.useFakeTimers();

    sliderm.slideTo('>');

    position = sliderm.getPosition();
    expect(position).toBe(9);

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(1);
    }, 2000);

    jest.runAllTimers();
  });

  test('Set the option loop to be false, and slide left.', () => {
    sliderm = new Sliderm('.sliderm', {
      loop: false,
    });

    sliderm.slideTo(1);
    position = sliderm.getPosition();
    expect(position).toBe(1);

    sliderm.slideTo('<');
    position = sliderm.getPosition();
    expect(position).toBe(1);
  });

  test('Set the option loop to be true, and slide left.', () => {
    sliderm = new Sliderm('.sliderm', {
      loop: true,
    });

    sliderm.slideTo(1);
    position = sliderm.getPosition();
    expect(position).toBe(1);

    jest.useFakeTimers();

    sliderm.slideTo('<');

    position = sliderm.getPosition();
    expect(position).toBe(0);

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(8);
    }, 2000);

    jest.runAllTimers();
  });

  // slide group items.

  test('Set the option loop to be false, grouping to be true, and slide right.', () => {
    sliderm = new Sliderm('.sliderm', {
      loop: false,
      grouping: true,
    });

    sliderm.slideTo(2);
    position = sliderm.getPosition();
    expect(position).toBe(2);

    sliderm.slideTo('>');
    position = sliderm.getPosition();
    expect(position).toBe(2);
  });

  test('Set the option loop to be true, grouping to be true, and slide right.', () => {
    sliderm = new Sliderm('.sliderm', {
      loop: true,
      grouping: true,
    });

    sliderm.slideTo(2);
    position = sliderm.getPosition();
    expect(position).toBe(2);

    jest.useFakeTimers();

    sliderm.slideTo('>');

    position = sliderm.getPosition();
    expect(position).toBe(3);

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(1);
    }, 2000);

    jest.runAllTimers();
  });

  test('Set the option loop to be false, grouping to be true, and slide left.', () => {
    sliderm = new Sliderm('.sliderm', {
      loop: false,
      grouping: true,
    });

    sliderm.slideTo(1);
    position = sliderm.getPosition();
    expect(position).toBe(1);

    sliderm.slideTo('<');
    position = sliderm.getPosition();
    expect(position).toBe(1);
  });

  test('Set the option loop to be true, grouping to be true, and slide left.', () => {
    sliderm = new Sliderm('.sliderm', {
      loop: true,
      grouping: true,
    });

    sliderm.slideTo(1);
    position = sliderm.getPosition();
    expect(position).toBe(1);

    jest.useFakeTimers();

    sliderm.slideTo('<');

    position = sliderm.getPosition();
    expect(position).toBe(0);

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(2);
    }, 2000);

    jest.runAllTimers();
  });
});
