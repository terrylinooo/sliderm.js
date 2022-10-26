/* eslint-disable no-console */
import html from '../fixtures/html';
import demoComponent from '../fixtures/demo-component';
import demoModule from '../fixtures/demo-module';
import Sliderm from '../../src/sliderm';

describe('Unit testing for Slidem main class...', () => {
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

  test('Test to use the method - updateCurrentItems, should return false after initializing.', () => {
    sliderm = new Sliderm('.sliderm');
    expect(sliderm.updateCurrentItems()).toBe(false);
  });

  test('Test to use the method - getOption, should return default if the option does not exist.', () => {
    sliderm = new Sliderm('.sliderm');
    expect(sliderm.getOption('option_not_exist', 'hello')).toBe('hello');
    expect(sliderm.getOption('option_not_exist.option', 'hello')).toBe('hello');
  });

  test('Test to use the method - updateOption.', () => {
    sliderm = new Sliderm('.sliderm');
    sliderm.updateOption('preview', false);
    expect(sliderm.getOption('preview')).toBe(false);
    sliderm.updateOption('preview', true);
    expect(sliderm.getOption('preview')).toBe(true);
    sliderm.updateOption('preview.edge', 50);
    expect(sliderm.getOption('preview.edge')).toBe(50);
    sliderm.updateOption('preview.edge', 60);
    expect(sliderm.getOption('preview.edge')).toBe(60);
    sliderm.updateOption('setting_not_exist.test', 60);
    expect(sliderm.getOption('setting_not_exist.test')).toBe(null);
  });

  test('Test to use the method - go.', () => {
    sliderm = new Sliderm('.sliderm');
    console.error = jest.fn();
    sliderm.go('module_not_exist');
    expect(console.error.mock.calls[0][0]).toBe('[Sliderm] Invalid module name: module_not_exist');
  });

  test('Test to use the method - off', () => {
    sliderm = new Sliderm('.sliderm');
    const { events } = sliderm.event;
    expect(typeof events.initialized).toBe('object');
    sliderm.off('initialized');
    expect(typeof events.initialized).toBe('undefined');
  });

  test('Test to use the method - beforeMountExtensions', () => {
    console.log = jest.fn();

    sliderm = new Sliderm('.sliderm', {
      demoComponent: true,
      extensions: [demoComponent, demoModule],
    });

    expect(console.log.mock.calls[0][0]).toBe('demoModule is executed.');
  });
});
