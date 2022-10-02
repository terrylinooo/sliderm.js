/**
 * The control of transition effect for each slide item.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {...any} args The arguments
 */
export default function transition(sliderm, ...args) {
  const [item, action] = args;
  const duration = sliderm.getOption('duration');
  if (action === 'stop') {
    item.style.removeProperty('transition');
    return;
  }
  item.style.setProperty('transition', `all ${duration}ms linear`);
}
