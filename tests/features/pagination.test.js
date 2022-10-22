import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssPaginations } from '../../src/core/selector';

describe('Unit testing for component pagination...', () => {
  let position = 0;
  let sliderm = null;
  let pagination = null;
  let paginationItems = [];

  beforeEach(() => {
    document.body.innerHTML = html();
    position = 0;
    sliderm = null;
    pagination = null;
    paginationItems = [];
  });

  test('Turn the component pagination off, the DOM should not exist.', () => {
    sliderm = new Sliderm('.sliderm', {
      pagination: false,
    });

    pagination = document.querySelector(`.${cssPaginations}`);
    expect(pagination).toBeNull();
  });

  test('Turn the component arrow on, the DOM should exist.', () => {
    sliderm = new Sliderm('.sliderm', {
      pagination: true,
    });

    pagination = document.querySelector(`.${cssPaginations}`);
    expect(pagination).toBeInstanceOf(HTMLDivElement);
  });

  test('Click the pagination button and check the position number.', () => {
    sliderm = new Sliderm('.sliderm', {
      arrow: true,
    });

    paginationItems = document.querySelector(`.${cssPaginations}`).children;

    jest.spyOn(sliderm, 'go');
    expect(sliderm.go).toHaveBeenCalledTimes(0);
    position = sliderm.getPosition();
    expect(position).toBe(1);
    paginationItems[2].click();
    position = sliderm.getPosition();
    expect(position).toBe(3);
    expect(sliderm.go).toHaveBeenCalled();
  });
});
