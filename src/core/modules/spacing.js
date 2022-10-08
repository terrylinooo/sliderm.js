/**
 * The spacing between each slide item.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 * @param {...any} args The arguments
 */
export default function spacing(sliderm, slider, ...args) {
  const [item] = args;
  const padding = Math.floor(sliderm.getOption('spacing') / 2);
  item.style.setProperty('padding', `0 ${padding}px`);
}
