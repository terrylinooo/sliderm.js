import { queue } from '../../src/utilities/await';

describe('Unit testing for the await utility...', () => {
  test('Check the function - queue', () => {
    const mockFunction = {
      test: () => true,
    };

    jest.spyOn(mockFunction, 'test');
    jest.useFakeTimers();

    queue(() => {
      mockFunction.test();
      expect(true).toBe(true, 'Queue for 2 seconds.');
    }, 2000);

    jest.runAllTimers();
    expect(mockFunction.test).toHaveBeenCalled();
  });
});
