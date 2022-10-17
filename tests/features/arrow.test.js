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
  })
  
  test('Turn the component arrow off.', () => {
    new Sliderm('.sliderm', {
      arrow: false,
    });

    const nextButton = document.querySelector(`.${cssButtonNext}`);
    const prevButton = document.querySelector(`.${cssButtonPrev}`);
    expect(nextButton).toBeNull();
    expect(prevButton).toBeNull();
  });

  test('Turn the component arrow on.', () => {
    new Sliderm('.sliderm', {
      arrow: true,
    });

    const nextButton = document.querySelector(`.${cssButtonNext}`);
    const prevButton = document.querySelector(`.${cssButtonPrev}`);
    expect(nextButton).toBeInstanceOf(HTMLDivElement);
    expect(prevButton).toBeInstanceOf(HTMLDivElement);
  });

  test('Click the next arrow button', () => {
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

  test('Click the previous arrow button', () => {
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
});
