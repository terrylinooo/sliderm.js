/**
 * Add support for mobile devices to touch left and right swipe.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 */
export default function touch(sliderm, slider) {
  if (!sliderm.getOption('touch')) {
    return;
  }

  /**
   * Initialize.
   */
  const init = () => {
    const threshold = sliderm.getOption('touch.threshold');
    const duration = sliderm.getOption('touch.duration');
    const event = sliderm.adaptEvent(slider);
    const start = {
      x: 0,
      y: 0,
      time: 0,
    };

    event.on('touchstart', (e) => {
      e.preventDefault();
      const obj = e.changedTouches[0];
      start.x = obj.pageX;
      start.y = obj.pageY;
      start.time = new Date().getTime();
    });

    event.on('touchmove', (e) => {
      e.preventDefault();
    });

    event.on('touchend', (e) => {
      e.preventDefault();
      const obj = e.changedTouches[0];
      const time = new Date().getTime() - start.time;
      const distance = Math.abs(obj.pageX - start.x);

      // The condition of swipe not met.
      if (time > duration || distance < threshold) {
        return;
      }
      const direction = obj.pageX > start.x ? '>' : '<';
      sliderm.slideTo(direction);
    });
  };

  init();
}
