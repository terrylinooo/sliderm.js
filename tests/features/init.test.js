import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { cssWrapper } from '../../src/core/selector';

describe('Unit testing for module init...', () => {
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  test('Check the initialization status.', () => {
    jest.useFakeTimers();
    sliderm = new Sliderm('.sliderm');

    setTimeout(() => {
      const root = sliderm.getRoot();
      expect(root.classList.contains(`${cssWrapper}--initialized`)).toBe(true);
    }, 3000);

    jest.runAllTimers();
  });
});
