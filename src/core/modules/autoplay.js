import { repeat, stop } from '../../utilities/await';

/**
 * Autoplay the carousel.
 *
 * @param {Object} sliderm The Sliderm object.
 */
export default function autoplay(sliderm) {
  if (!sliderm.getOption('autoplay')) {
    return;
  }

  const duration = sliderm.getOption('autoplay.duration');
  const direction = sliderm.getOption('autoplay.direction');
  const arrow = direction === 'left' ? '<' : '>';

  const timerId = repeat(() => {
    sliderm.slideTo(arrow);
  }, duration);

  sliderm.on('destory', () => {
    stop(timerId);
  });
}
