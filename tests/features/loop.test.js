import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssSliderContainer, cssCloneItem, cssEmptyItem } from '../../src/core/selector';

describe('Unit testing for module loop...', () => {
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html(5);
    sliderm = null;
  });

  test('Check the cloned items.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 4,
      grouping: true,
      loop: true,
    });

    const items = document.querySelector(`.${cssSliderContainer}`).children;

    // cloned items: 4 + original itmes: 5 + empty itmes: 3 cloned itmes: 4
    expect(items.length).toBe(16);

    expect(items[0].classList.contains(cssCloneItem)).toBe(true);
    expect(items[1].classList.contains(cssCloneItem)).toBe(true);
    expect(items[2].classList.contains(cssCloneItem)).toBe(true);
    expect(items[3].classList.contains(cssCloneItem)).toBe(true);
    expect(items[4].classList.contains(cssCloneItem)).toBe(false);
    expect(items[5].classList.contains(cssCloneItem)).toBe(false);
    expect(items[6].classList.contains(cssCloneItem)).toBe(false);
    expect(items[7].classList.contains(cssCloneItem)).toBe(false);
    expect(items[8].classList.contains(cssCloneItem)).toBe(false);
    expect(items[9].classList.contains(cssEmptyItem)).toBe(true);
    expect(items[10].classList.contains(cssEmptyItem)).toBe(true);
    expect(items[11].classList.contains(cssEmptyItem)).toBe(true);
    expect(items[12].classList.contains(cssCloneItem)).toBe(true);
    expect(items[13].classList.contains(cssCloneItem)).toBe(true);
    expect(items[14].classList.contains(cssCloneItem)).toBe(true);
    expect(items[15].classList.contains(cssCloneItem)).toBe(true);
    expect(items[16]).toBe(undefined);

    expect(items[0].classList.contains(cssEmptyItem)).toBe(false);
    expect(items[1].classList.contains(cssEmptyItem)).toBe(true);
    expect(items[2].classList.contains(cssEmptyItem)).toBe(true);
    expect(items[3].classList.contains(cssEmptyItem)).toBe(true);

    expect(items[12].classList.contains(cssEmptyItem)).toBe(false);
    expect(items[13].classList.contains(cssEmptyItem)).toBe(false);
    expect(items[14].classList.contains(cssEmptyItem)).toBe(false);
    expect(items[15].classList.contains(cssEmptyItem)).toBe(false);
  });

  test('Test to destory, the cloned items should be thoroughly removed.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 4,
      grouping: true,
      loop: true,
    });

    const items = document.querySelector(`.${cssSliderContainer}`).children;
    expect(items.length).toBe(16);

    sliderm.destory();

    const items2 = document.querySelector(`.${cssSliderContainer}`).children;
    expect(items2.length).toBe(5);
  });
});
