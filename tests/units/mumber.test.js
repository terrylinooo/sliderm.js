import { isNumeric, isInteger } from '../../src/utilities/number';

describe('Unit testing for the number utility...', () => {
  test('Check the function - isNumeric', () => {
    expect(isNumeric(16)).toBe(true);
    expect(isNumeric('16')).toBe(true);
    expect(isNumeric(0.64)).toBe(true);
    expect(isNumeric('0.64')).toBe(true);
    expect(isNumeric('-0.64')).toBe(true);
    expect(isNumeric('16a')).toBe(false);
    expect(isNumeric('0064')).toBe(false);
    expect(isNumeric('')).toBe(false);
  });

  test('Check the function - isInteger', () => {
    expect(isInteger(16)).toBe(true);
    expect(isInteger(0.64)).toBe(true);
    expect(isInteger(-16)).toBe(true);
    expect(isInteger('16')).toBe(false);
    expect(isInteger('16a')).toBe(false);
    expect(isInteger('0.64')).toBe(false);
    expect(isInteger('0064')).toBe(false);
    expect(isInteger('')).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
  });
});
