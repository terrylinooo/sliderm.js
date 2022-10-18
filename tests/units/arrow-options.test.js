import { size, bold, shape, color, bgColor, opacity } from '../../src/components/arrow/options';

describe('Unit testing for the utilities of component arrow...', () => {
  test('Check the function - size', () => {
    expect(size(16)).toBe(null); // the default value.
    expect(size(18)).toBe(18);
    expect(size(30)).toBe(28); // The maximum value.
    expect(size(10)).toBe(13); // The minimum value.
  });

  test('Check the function - bold', () => {
    expect(bold(1)).toBe('thin');
    expect(bold(2)).toBe('regular'); // the default value.
    expect(bold(3)).toBe('bold');
    expect(bold(4)).toBe('regular'); // Invalid value, the maximum value is 3.
  });

  test('Check the function - shape', () => {
    expect(shape('none')).toBe('none');
    expect(shape('square')).toBe('square');
    expect(shape('xxxxxx')).toBe('circle'); // Invalid value, make it the default value.
  });

  test('Check the function - color', () => {
    expect(color('#0000f0')).toBe('#0000f0');
    expect(color('#ffffff')).toBeNull(); // the default value.
  });

  test('Check the function - bgColor', () => {
    expect(bgColor('#0000f0')).toBe('#0000f0');
    expect(bgColor('#000000')).toBeNull(); // the default value.
  });

  test('Check the function - opacity', () => {
    expect(opacity(0.8)).toBe(0.8);
    expect(opacity(0.5)).toBeNull(); // the default value.
    expect(opacity(0.09)).toBeNull(); // Invalid value, the minimum value is 0.1
    expect(opacity(2)).toBeNull(); // Invalid value, the maximum value is 1.
  });
});
