import dom from '../utilities/dom';
import selector from '../core/selector';
import EventAdapter from '../core/events/event-adapter';

/**
 * The view-component of Sliderm.
 * Create a pagination on the bottom side of the slider.
 *
 * @param {Object} sliderm The Sliderm instance.
 */
export default function pagination(sliderm) {
  const createContainer = () => {
    const container = dom.set('div', selector.paginations);
    return container;
  };

  const dotCount = sliderm.getOption('grouping') ? sliderm.getGroupCount() : sliderm.getItemCount();

  const createDots = (container) => {
    for (let i = 0; i < dotCount; i += 1) {
      const dot = dom.set('div', selector.paginationItem);
      if (i === 0) {
        dot.setAttribute('data-active', true);
      }
      container.append(dot);
    }
    return container;
  };

  const init = () => {
    const node = createDots(createContainer());
    const event = new EventAdapter(node);
    sliderm.getRoot().append(node);

    event.on('click', (e) => {
      if (selector.paginationItem === `.${e.target.className}`) {
        const index = Array.prototype.indexOf.call(node.childNodes, e.target);
        const pagiNumber = index + 1;
        sliderm.go('slide', pagiNumber);
      }
    });

    sliderm.on('slide.end', (position) => {
      const dots = dom.find(sliderm.getRoot(), selector.paginations).children;
      Array.from(dots).forEach((dot, index) => {
        const pagiNumber = index + 1;
        dot.removeAttribute('data-active');
        if (pagiNumber === position) {
          dot.setAttribute('data-active', true);
        }
      });
    });
  };

  init();
}
