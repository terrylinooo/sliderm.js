import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssSliderItem } from '../../src/core/selector';

describe('Unit testing for module spacing...', () => {
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  test('Set the option spacing to 20 and check the padding of slide item.', () => {
    sliderm = new Sliderm('.sliderm', {
      spacing: 20,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const padding = item.style.getPropertyValue('padding');
    expect(padding).toBe('0px 10px');
  });

  test('Set the option spacing to 30 and check the padding of slide item.', () => {
    sliderm = new Sliderm('.sliderm', {
      spacing: 30,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const padding = item.style.getPropertyValue('padding');
    expect(padding).toBe('0px 15px');
  });

  test('Test to destory, the padding should be empty.', () => {
    sliderm = new Sliderm('.sliderm', {
      spacing: 40,
    });

    const item = document.querySelector(`.${cssSliderItem}`);
    const padding = item.style.getPropertyValue('padding');
    expect(padding).toBe('0px 20px');

    sliderm.destory();

    const item2 = document.querySelector(`.${cssSliderItem}`);
    const padding2 = item2.style.getPropertyValue('padding');
    expect(padding2).toBe('');
  });
});
