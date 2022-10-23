import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssSliderContainer } from '../../src/core/selector';

describe('Unit testing for module preview...', () => {
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  test('Set the option preview to be true and check the padding value.', () => {
    sliderm = new Sliderm('.sliderm', {
      preview: true,
      _preview: {
        edge: 40,
      },
    });

    const item = document.querySelector(`.${cssSliderContainer}`);
    const padding = item.style.getPropertyValue('padding');
    expect(padding).toBe('0px 40px');
  });

  test('Test to destory, the padding should be removed.', () => {
    sliderm = new Sliderm('.sliderm', {
      preview: true,
      _preview: {
        edge: 20,
      },
    });

    const item = document.querySelector(`.${cssSliderContainer}`);
    const padding = item.style.getPropertyValue('padding');
    expect(padding).toBe('0px 20px');

    sliderm.destory();

    const item2 = document.querySelector(`.${cssSliderContainer}`);
    const padding2 = item2.style.getPropertyValue('padding');
    expect(padding2).toBe('');
  });
});
