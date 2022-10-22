import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssSliderContainer, cssCloneItem } from '../../src/core/selector';

describe('Unit testing for module clone...', () => {
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html(5);
    sliderm = null;
  });

  test('Check the cloned items.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 4,
      loop: true,
    });

    const items = document.querySelector(`.${cssSliderContainer}`).children;

    // cloned items: 4 + original itmes: 5 + cloned itmes: 4
    expect(items.length).toBe(13);

    expect(items[0].classList.contains(cssCloneItem)).toBe(true);
    expect(items[1].classList.contains(cssCloneItem)).toBe(true);
    expect(items[2].classList.contains(cssCloneItem)).toBe(true);
    expect(items[3].classList.contains(cssCloneItem)).toBe(true);
    expect(items[4].classList.contains(cssCloneItem)).toBe(false);
    expect(items[5].classList.contains(cssCloneItem)).toBe(false);
    expect(items[6].classList.contains(cssCloneItem)).toBe(false);
    expect(items[7].classList.contains(cssCloneItem)).toBe(false);
    expect(items[8].classList.contains(cssCloneItem)).toBe(false);
    expect(items[9].classList.contains(cssCloneItem)).toBe(true);
    expect(items[10].classList.contains(cssCloneItem)).toBe(true);
    expect(items[11].classList.contains(cssCloneItem)).toBe(true);
    expect(items[12].classList.contains(cssCloneItem)).toBe(true);
    expect(items[13]).toBe(undefined);
  });

  test('Test to destory, the cloned items should be thoroughly removed.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 4,
    });

    const items = document.querySelector(`.${cssSliderContainer}`).children;
    expect(items.length).toBe(13);

    sliderm.destory();

    const items2 = document.querySelector(`.${cssSliderContainer}`).children;
    expect(items2.length).toBe(5);
  });
});
