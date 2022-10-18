import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssSliderItem } from '../../src/core/selector';

describe('Unit testing for module width...', () => {
  // eslint-disable-next-line no-unused-vars
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  test('Set the option columns to 1.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 1,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const flex = item.style.getPropertyValue('flex');
    expect(flex).toBe('0 0 100%');
  });

  test('Set the option columns to 2.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 2,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const flex = item.style.getPropertyValue('flex');
    expect(flex).toBe('0 0 50%');
  });

  test('Set the option columns to 3.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 3,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const flex = item.style.getPropertyValue('flex');
    expect(flex).toBe('0 0 33.33%');
  });

  test('Set the option columns to 4.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 4,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const flex = item.style.getPropertyValue('flex');
    expect(flex).toBe('0 0 25%');
  });
});
