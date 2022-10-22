/* eslint-disable no-console */
import { error } from '../../src/utilities/console';

describe('Unit testing for the dom utility...', () => {
  test('Check the function - error', () => {
    console.error = jest.fn();
    error('This is a test.');
    expect(console.error.mock.calls[0][0]).toBe('[Sliderm] This is a test.');
  });
});
