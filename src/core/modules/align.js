/**
 * Align the slide items vartically.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 */
export default function align(sliderm, slider) {
  const option = sliderm.getOption('align');

  if (option === 'center') {
    slider.style.setProperty('align-items', 'center');
  } else if (option === 'bottom') {
    slider.style.setProperty('align-items', 'flex-end');
  }

  sliderm.on('destory', () => {
    slider.style.removeProperty('align-items');
  });
}
