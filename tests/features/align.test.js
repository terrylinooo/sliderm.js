import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssSliderContainer } from '../../src/core/selector';

describe('Unit testing for module align...', () => {
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  test('Set the option align to bottom and check the align-items value.', () => {
    sliderm = new Sliderm('.sliderm', {
      align: 'bottom',
    });

    const item = document.querySelector(`.${cssSliderContainer}`);
    const align = item.style.getPropertyValue('align-items');
    expect(align).toBe('flex-end');
  });

  test('Test to destory, the align-items should be removed.', () => {
    sliderm = new Sliderm('.sliderm', {
      align: 'center',
    });

    const item = document.querySelector(`.${cssSliderContainer}`);
    const align = item.style.getPropertyValue('align-items');
    expect(align).toBe('center');

    sliderm.destory();

    const item2 = document.querySelector(`.${cssSliderContainer}`);
    const align2 = item2.style.getPropertyValue('align-items');
    expect(align2).toBe('');
  });
});
