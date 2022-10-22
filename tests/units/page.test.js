import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';

describe('Unit testing for module page...', () => {
  let sliderm = null;
  let page = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = new Sliderm('.sliderm');
    page = sliderm.getPage();
  });

  test('Check the function - calculate', () => {
    let pageNumber = page.calculate(3, false);
    expect(pageNumber).toBe(3);

    pageNumber = page.calculate('<', false);
    expect(pageNumber).toBe(0);

    pageNumber = page.calculate('>', false);
    expect(pageNumber).toBe(2);

    pageNumber = page.calculate(3, true);
    expect(pageNumber).toBe(3);

    pageNumber = page.calculate('<', true);
    expect(pageNumber).toBe(8);

    pageNumber = page.calculate('>', true);
    expect(pageNumber).toBe(2);
  });

  test('Check the function - maximum', () => {
    const max = page.maximum();
    expect(max).toBe(8);
  });
});
