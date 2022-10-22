/**
 * For testing only.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @return {Object}
 */
export default function demoComponent(sliderm) {
  sliderm.go('demoModule');

  /**
   * Initialize.
   */
  const init = () => {
    sliderm.on('destory', () => {
      //
    });
  };

  init();
}
