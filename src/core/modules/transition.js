/**
 * The control of transition effect for each slide item.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM elemet of the slider container.
 * @param {...any} args The arguments
 */
export default function transition(sliderm, slider, ...args) {
  const [action] = args;
  const duration = sliderm.getOption('duration');
  if (action === 'stop') {
    slider.style.removeProperty('transition-duration');
    return;
  }
  slider.style.setProperty('transition-duration', `${duration}ms`);

  sliderm.on('destory', () => {
    slider.style.removeProperty('transition-duration');
  });
}
