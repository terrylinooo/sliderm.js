import { setDom, findDom } from '../utilities/dom';
import { cssPaginations, cssPaginationItem } from '../core/selector';

/**
 * The view-component of Sliderm.
 * Create a pagination on the bottom side of the slider.
 *
 * @param {Object} sliderm The Sliderm instance.
 */
export default function pagination(sliderm) {
  /**
   * Create a HTML DOM element for the pagination container.
   *
   * @return {Element}
   */
  const createContainer = () => {
    const container = setDom('div', cssPaginations);
    return container;
  };

  /**
   * The amount of the pagination dots.
   *
   * @var {Number}
   */
  const getDotCount = () => {
    const count = sliderm.getOption('grouping') ? sliderm.getGroupCount() : sliderm.getItemCount();
    return count;
  };

  /**
   * Create the HTML DOM elements for the pagination dots.
   *
   * @return {Element}
   */
  const createDots = (container) => {
    for (let i = 0; i < getDotCount(); i += 1) {
      const dot = setDom('div', cssPaginationItem);
      if (i === 0) {
        dot.setAttribute('data-active', true);
      }
      container.append(dot);
    }
    return container;
  };

  /**
   * Initialzie.
   */
  const init = () => {
    const node = createDots(createContainer());
    const event = sliderm.eventAdapter(node);
    sliderm.getRoot().append(node);

    event.on('click', (e) => {
      if (cssPaginationItem === e.target.className) {
        const index = Array.prototype.indexOf.call(node.childNodes, e.target);
        const paginationNumber = index + 1;
        sliderm.slideTo(paginationNumber);
      }
    });

    sliderm.on('slide.end', () => {
      const position = sliderm.getPosition();
      const dots = findDom(sliderm.getRoot(), `.${cssPaginations}`).children;
      Array.from(dots).forEach((dot, index) => {
        const paginationNumber = index + 1;
        dot.removeAttribute('data-active');
        if (paginationNumber === position) {
          dot.setAttribute('data-active', true);
        }
      });
    });

    sliderm.on('destory', () => {
      node.remove();
    });
  };

  init();
}
