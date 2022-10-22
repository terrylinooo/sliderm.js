/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/**
 * For testing only.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM elemet of the slider container.
 * @param {...any} args The arguments
 */
export default function demoModule(sliderm, slider, ...args) {
  console.log('demoModule is executed.');

  sliderm.on('destory', () => {
    //
  });
}
