import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssSliderItem, cssCloneItem } from '../../src/core/selector';

describe('Unit testing for module grouping...', () => {
  // eslint-disable-next-line no-unused-vars
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  test('Set the option columns to 4 and check the data-group value.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 4,
      grouping: true,
    });

    let order = 0;
    const items = document.querySelectorAll(`.${cssSliderItem}`);
    const originalItems = [];
    Array.from(items).forEach((item) => {
      if (!item.classList.contains(cssCloneItem)) {
        originalItems.push(item);
      }
    });
    order = originalItems[0].getAttribute('data-order');
    expect(order).toBe('1');

    order = originalItems[3].getAttribute('data-order');
    expect(order).toBe('1');

    order = originalItems[4].getAttribute('data-order');
    expect(order).toBe('2');
  });

  test('Test to destory, the DOM attribute data-order should be removed.', () => {
    sliderm = new Sliderm('.sliderm', {
      columns: 2,
      grouping: true,
    });

    let order = 0;
    const items = document.querySelectorAll(`.${cssSliderItem}`);
    const originalItems = [];

    Array.from(items).forEach((item) => {
      if (!item.classList.contains(cssCloneItem)) {
        originalItems.push(item);
      }
    });

    order = originalItems[0].getAttribute('data-order');
    expect(order).toBe('1');

    order = originalItems[2].getAttribute('data-order');
    expect(order).toBe('2');

    sliderm.destory();

    order = originalItems[2].getAttribute('data-order');
    expect(order).toBe(null);
  });
});
