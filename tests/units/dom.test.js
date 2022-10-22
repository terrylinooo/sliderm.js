import html from '../fixtures/html';
import { cssSliderContainer, cssSliderWrapper } from '../../src/core/selector';
import { hasDom, getDom, setDom, findDom } from '../../src/utilities/dom';

describe('Unit testing for the console utility...', () => {
  beforeEach(() => {
    document.body.innerHTML = html();
  });

  test('Check the function - hasDom', () => {
    const domNotExist = hasDom('.hello-word');
    expect(domNotExist).toBe(false);
    const domExist = hasDom(`.${cssSliderContainer}`);
    expect(domExist).toBe(true);
  });

  test('Check the function - getDom', () => {
    const domNotExist = getDom('.hello-word');
    expect(domNotExist).toBe(null);
    const domExist = getDom(`.${cssSliderContainer}`);
    expect(domExist).toBeInstanceOf(HTMLDivElement);
  });

  test('Check the function - setDom', () => {
    const dom = setDom('div', 'hello-word');
    expect(dom).toBeInstanceOf(HTMLDivElement);
    expect(dom.classList.contains('hello-word')).toBe(true);

    const dom2 = setDom('div', 'hello-word', 'taiwan');
    expect(dom2.classList.contains('taiwan')).toBe(true);
  });

  test('Check the function - findDom', () => {
    const domNotExist = findDom('.hello-word');
    expect(domNotExist).toBe(null);
    const wrapper = getDom(`.${cssSliderWrapper}`);
    const domExist = findDom(wrapper, `.${cssSliderContainer}`);
    expect(domExist).toBeInstanceOf(HTMLDivElement);
  });
});
