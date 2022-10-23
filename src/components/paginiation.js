import { setDom, findDom } from '../utilities/dom';
import { cssPaginations, cssPaginationItem } from '../core/selector';

/**
 * The view-component of Sliderm.
 * Create a pagination on the bottom side of the slider.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @return {Object}
 */
export default function pagination(sliderm) {
  let max;
  let node;
  let event;

  /**
   * The event handler for clicking the pagination button.
   *
   * @param {Object} e PointerEvent
   */
  const click = (e) => {
    if (cssPaginationItem === e.target.className) {
      const index = Array.prototype.indexOf.call(node.childNodes, e.target);
      const paginationNumber = index + 1;
      sliderm.slideTo(paginationNumber);
    }
  };

  /**
   * The event handler for marking up the active pagination button.
   */
  const mark = () => {
    const position = sliderm.getPosition();
    const dots = findDom(sliderm.getRoot(), `.${cssPaginations}`).children;
    Array.from(dots).forEach((dot, index) => {
      const paginationNumber = index + 1;
      dot.removeAttribute('data-active');
      if (paginationNumber === position) {
        dot.setAttribute('data-active', true);
      }
    });
  };

  /**
   * Inject the pagination to the DOM.
   */
  const render = () => {
    const container = setDom('div', cssPaginations);
    max = sliderm.getPage().maximum();
    for (let i = 0; i < max; i += 1) {
      const dot = setDom('div', cssPaginationItem);
      if (i === 0) {
        dot.setAttribute('data-active', true);
      }
      container.append(dot);
    }
    node = container;
    event = sliderm.adaptEvent(node);
    sliderm.getRoot().append(node);
  };

  /**
   * Remove all events and the DOM we injected.
   */
  const destory = () => {
    event.off('click', click);
    sliderm.off('slide.end', mark);
    node.remove();
  };

  /**
   * Listen up the events.
   */
  const listen = () => {
    event.on('click', click);
    sliderm.on('slide.end', mark);
  };

  /**
   * Initialize.
   */
  const init = () => {
    render();
    listen();
  };

  sliderm.on('destory', destory);

  sliderm.on('breakpoint.changed', () => {
    destory();
    init();
  });

  init();
}
