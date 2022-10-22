/* eslint-disable no-console */
import html from '../fixtures/html';
import Sliderm from '../../src/sliderm';
import { queue } from '../../src/utilities/await';

describe('Unit testing for module slide...', () => {
  let sliderm = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    sliderm = null;
  });

  test('Test to initializ an invalid DOM selector.', () => {
    console.error = jest.fn();
    sliderm = new Sliderm('.hello');
    expect(console.error.mock.calls[0][0]).toBe('[Sliderm] The DOM ".hello" is invalid.');
  });

  test('Test to use the method updateCurrentItems, should return false after initializing.', () => {
    sliderm = new Sliderm('.sliderm');
    expect(sliderm.updateCurrentItems()).toBe(false);
  });

  test('Test to use the method getOption, should return default if the option does not exist.', () => {
    sliderm = new Sliderm('.sliderm');
    expect(sliderm.getOption('option_not_exist', 'hello')).toBe('hello');
    expect(sliderm.getOption('option_not_exist.option', 'hello')).toBe('hello');
  });

  test('Test to use the method go.', () => {
    sliderm = new Sliderm('.sliderm');
    console.error = jest.fn();
    sliderm.go('module_not_exist');
    expect(console.error.mock.calls[0][0]).toBe('[Sliderm] Invalid module name: module_not_exist');
  });

  test('Test to use the method off.', () => {
    sliderm = new Sliderm('.sliderm');
   
  });
});
