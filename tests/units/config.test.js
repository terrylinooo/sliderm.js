/* eslint-disable no-underscore-dangle */
import config from '../../src/core/config';

/**
 * Make sure the default settings will not be changed without notice.
 */

describe('Unit testing for the configuration...', () => {
  test('Check the default settings.', () => {
    expect(config.arrow).toBe(true);
    expect(config.pagination).toBe(true);
    expect(config.spinner).toBe(true);
    expect(config.grouping).toBe(false);
    expect(config.loop).toBe(true);
    expect(config.preview).toBe(false);
    expect(config.columns).toBe(4);
    expect(config.duration).toBe(1000);
    expect(config.spacing).toBe(10);
    expect(config.align).toBe('center');
    expect(config.extensions).toMatchObject([]);
    expect(config._arrow).toMatchObject({
      color: '#ffffff',
      bgColor: '#000000',
      opacity: 0.5,
      size: 16,
      shape: 'circle',
      bold: 2,
    });
    expect(config._preview).toMatchObject({
      edge: 40,
    });
    expect(config._spinner).toMatchObject({
      color: '#1cbbb4',
    });
  });
});
