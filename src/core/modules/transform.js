/**
 * Position the slide items horizontally.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 * @param {...any} args The arguments
 */
export default function transform(sliderm, slider, ...args) {
  const [xAxis] = args;
  slider.style.setProperty('transform', `translateX(${xAxis}px)`);
}
