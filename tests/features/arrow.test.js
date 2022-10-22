import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssButtonNext, cssButtonPrev } from '../../src/core/selector';
import { queue } from '../../src/utilities/await';

describe('Unit testing for component arrow...', () => {
  let position = 0;
  let sliderm = null;
  let nextButton = null;
  let prevButton = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    position = 0;
    sliderm = null;
    nextButton = null;
    prevButton = null;
  });

  test('Turn the component arrow off, the DOM should not exist.', () => {
    sliderm = new Sliderm('.sliderm', {
      arrow: false,
    });

    nextButton = document.querySelector(`.${cssButtonNext}`);
    prevButton = document.querySelector(`.${cssButtonPrev}`);
    expect(nextButton).toBeNull();
    expect(prevButton).toBeNull();
  });

  test('Turn the component arrow on, the DOM should exist.', () => {
    sliderm = new Sliderm('.sliderm', {
      arrow: true,
    });

    nextButton = document.querySelector(`.${cssButtonNext}`);
    prevButton = document.querySelector(`.${cssButtonPrev}`);
    expect(nextButton).toBeInstanceOf(HTMLDivElement);
    expect(prevButton).toBeInstanceOf(HTMLDivElement);
  });

  test('Click the next arrow button and check the position number.', () => {
    sliderm = new Sliderm('.sliderm', {
      arrow: true,
    });

    nextButton = document.querySelector(`.${cssButtonNext}`);

    jest.spyOn(sliderm, 'go');
    expect(sliderm.go).toHaveBeenCalledTimes(0);
    position = sliderm.getPosition();
    expect(position).toBe(1);
    nextButton.click();
    position = sliderm.getPosition();
    expect(position).toBe(2);
    expect(sliderm.go).toHaveBeenCalled();
  });

  test('Click the previous arrow button and check the position number.', () => {
    sliderm = new Sliderm('.sliderm', {
      arrow: true,
    });

    jest.useFakeTimers();

    prevButton = document.querySelector(`.${cssButtonPrev}`);

    position = sliderm.getPosition();
    expect(position).toBe(1);
    prevButton.click();

    queue(() => {
      position = sliderm.getPosition();
      expect(position).toBe(8);
    }, 2000);

    jest.runAllTimers();
  });

  test('Apply the settings for component arrow.', () => {
    sliderm = new Sliderm('.sliderm', {
      arrow: true,
      _arrow: {
        color: '#eeeeff',
        bgColor: '#222222',
        opacity: 0.6,
        size: 18,
      },
    });

    prevButton = document.querySelector(`.${cssButtonPrev}`);
    const color = prevButton.style.getPropertyValue('color');
    const bgColor = prevButton.style.getPropertyValue('background-color');
    const opacity = prevButton.style.getPropertyValue('opacity');
    const size = prevButton.style.getPropertyValue('font-size');
    expect(color).toBe('rgb(238, 238, 255)');
    expect(bgColor).toBe('rgb(34, 34, 34)');
    expect(opacity).toBe('0.6');
    expect(size).toBe('18px');
  });
});
