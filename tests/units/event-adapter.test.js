/* eslint-disable no-console */
import EventAdapter from '../../src/core/events/event-adapter';
import { cssSliderWrapper } from '../../src/core/selector';
import html from '../fixtures/html';

describe('Unit testing for the class EventAdapter...', () => {
  let event = null;

  beforeEach(() => {
    document.body.innerHTML = html();
    const wrapper = document.querySelector(`.${cssSliderWrapper}`);
    event = new EventAdapter(wrapper);
  });

  test('Check the function - on, off, emit and destory.', () => {
    const handler = () => {
      console.log('Handler called.');
    };
    event.on('initialize', handler);
    event.on('initialized', handler);

    console.log = jest.fn();
    event.emit('initialize');
    expect(console.log.mock.calls[0][0]).toBe('Handler called.');

    console.log = jest.fn();
    event.off('initialize', handler);
    event.emit('initialize');
    expect(typeof console.log.mock.calls[0]).toBe('undefined');

    console.log = jest.fn();
    event.emit('initialized');
    expect(console.log.mock.calls[0][0]).toBe('Handler called.');

    event.destory();

    expect(() => {
      event.emit('initialized');
    }).toThrow(TypeError);
  });
});
