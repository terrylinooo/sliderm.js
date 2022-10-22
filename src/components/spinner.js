import { setDom } from '../utilities/dom';
import { cssSpinner } from '../core/selector';

/**
 * The view-component of Sliderm.
 * Create a loading effect of initializing stage.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @return {Object}
 */
export default function spinner(sliderm) {
  /**
   * Initialize.
   */
  const init = () => {
    const color = sliderm.getOption('spinner.color');
    const node = setDom('div', cssSpinner);
    node.style.setProperty('color', color);
    sliderm.getRoot().append(node);

    sliderm.on('destory', () => {
      node.remove();
    });
  };

  init();
}
