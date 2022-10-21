import { error } from '../../src/utilities/console';

describe('Unit testing for the dom utility...', () => {
  test('Check the function - error', () => {
    // eslint-disable-next-line no-console
    console.error = jest.fn();
    error('This is a test.');
    // eslint-disable-next-line no-console
    expect(console.error.mock.calls[0][0]).toBe('[Sliderm] This is a test.');
  });
});
