import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssSliderItem } from '../../src/core/selector';

describe('Unit testing for module breakpoint...', () => {
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  test('Test breakpoint for window width 320px.', () => {
    // Before initializing Sliderm.
    window.innerWidth = 320;

    sliderm = new Sliderm('.sliderm', {
      columns: 4,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const flex = item.style.getPropertyValue('flex');
    expect(flex).toBe('0 0 100%');
    sliderm.destory();
  });

  test('Test breakpoint for window width 800px.', () => {
    // Before initializing Sliderm.
    window.innerWidth = 800;

    sliderm = new Sliderm('.sliderm', {
      columns: 4,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const flex = item.style.getPropertyValue('flex');
    expect(flex).toBe('0 0 33.33%');
    sliderm.destory();
  });

  test('Test breakpoint for window width 640px.', () => {
    // Before initializing Sliderm.
    window.innerWidth = 640;

    sliderm = new Sliderm('.sliderm', {
      columns: 4,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const flex = item.style.getPropertyValue('flex');
    expect(flex).toBe('0 0 50%');
    sliderm.destory();
  });

  test('Test breakpoint for window width 320px, but the option is off.', () => {
    // Before initializing Sliderm.
    window.innerWidth = 320;

    sliderm = new Sliderm('.sliderm', {
      columns: 4,
      breakpoint: false,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const flex = item.style.getPropertyValue('flex');
    expect(flex).toBe('0 0 25%');
    sliderm.destory();
  });
});
