import dom from '../utilities/dom';
import selector from '../core/selector';
import EventAdapter from '../core/events/event-adapter';

/**
 * The view-component of Sliderm.
 * Create the "next button" and "previous button" on both sides of the slider.
 *
 * @param {Object} sliderm The Sliderm instance.
 */
export default function previousNext(sliderm) {
  const createButton = (direction) => {
    const name = direction === 'left' ? selector.buttonPrev : selector.buttonNext;
    return dom.set('div', name);
  };

  const init = () => {
    const prevButton = createButton('left');
    const nextButton = createButton('right');
    const prevEvent = new EventAdapter(prevButton);
    const nextEvent = new EventAdapter(nextButton);

    sliderm.getRoot().append(prevButton);
    sliderm.getRoot().append(nextButton);

    prevEvent.on('click', () => {
      sliderm.go('slide', '<');
    });

    nextEvent.on('click', () => {
      sliderm.go('slide', '>');
    });
  };

  init();
}
