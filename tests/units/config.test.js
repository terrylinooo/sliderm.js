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
    expect(config.touch).toBe(true);
    expect(config.breakpoint).toBe(true);
    expect(config.autoplay).toBe(false);
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
    expect(config._breakpoint).toMatchObject({
      columns: {
        4: false,
        3: 960,
        2: 768,
        1: 420,
      },
    });
    expect(config._touch).toMatchObject({
      threshold: 10,
      duration: 300,
    });
    expect(config._autoplay).toMatchObject({
      direction: 'right',
      duration: 5000,
    });
  });
});
