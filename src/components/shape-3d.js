import { setDom, findDom } from '../utilities/dom';
import { cssSliderContainer } from '../core/selector';

/**
 * Let the slide items have a 3d-shape.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @return {Object}
 */
export default function shape3d(sliderm) {
  /**
   * Initialize.
   */
  const init = () => {
    const square = ['front', 'back', 'top', 'right', 'top', 'down'];
    const doms = [];
    const originalDoms = [];
    const items = Array.from(findDom(sliderm.getRoot(), `.${cssSliderContainer}`).children);

    for (let i = 0; i < items.length; i += 1) {
      for (let j = 0; j < square.length; j += 1) {
        const layer = setDom('div', `sliderm__shape3d--${square[j]}`);
        doms.push(layer);

        if (j === 0) {
          const content = items[i].innerHTML;
          originalDoms[i] = content;
          layer.innerHTML = content;
          items[i].innerHTML = '';
        }
        items[i].append(layer);
      }
    }

    sliderm.on('destory', () => {
      doms.forEach((dom) => {
        dom.remove();
      });

      for (let i = 0; i < items.length; i += 1) {
        items[i].innerHTML = originalDoms[i];
      }
    });
  };

  init();
}
