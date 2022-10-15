import { setDom } from '../utilities/dom';
import { cssButtonNext, cssButtonPrev } from '../core/selector';

/**
 * The view-component of Sliderm.
 * Create the "next button" and "previous button" on both sides of the slider.
 *
 * @param {Object} sliderm The Sliderm instance.
 */
export default function arrow(sliderm) {
  /**
   * Create a HTML DOM element.
   *
   * @param {String} direction The direction.
   * @return {Element}
   */
  const createButton = (direction) => {
    const name = direction === 'left' ? cssButtonPrev : cssButtonNext;
    return setDom('div', name);
  };

  /**
   * Get the bold style of the arrow buttons.
   *
   * @return {String}
   */
  const getBoldType = () => {
    const bold = sliderm.getOption('arrow.bold');
    const boldTypes = {
      1: 'thin',
      2: 'regular',
      3: 'bold',
    };
    return boldTypes[bold] !== undefined ? boldTypes[bold] : boldTypes[2];
  };

  /**
   * Get the font size of the arrow buttons.
   *
   * @return {Number}
   */
  const getFontSize = () => {
    const size = sliderm.getOption('arrow.size');
    if (size <= 13) {
      return 13;
    }
    if (size >= 28) {
      return 28;
    }
    return typeof size !== 'number' ? 16 : size;
  };

  /**
   * Get the style properties of the arrow buttons.
   *
   * @return {Array}
   */
  const getProperties = () => [
    {
      key: 'color',
      default: '#ffffff',
      value: sliderm.getOption('arrow.color'),
    },
    {
      key: 'opacity',
      default: 0.8,
      value: sliderm.getOption('arrow.opacity'),
    },
    {
      key: 'background-color',
      default: '#000000',
      value: sliderm.getOption('arrow.bgColor'),
    },
    {
      key: 'font-size',
      default: '16px',
      value: `${getFontSize()}px`,
    },
  ];

  /**
   * Get the shape of the arrow buttons.
   *
   * @return {String}
   */
  const getShape = () => {
    const shape = sliderm.getOption('arrow.shape');
    if (shape === 'none') {
      return shape;
    }
    if (shape === 'square') {
      return shape;
    }
    return 'circle';
  };

  /**
   * Initialzie.
   */
  const init = () => {
    const prevButton = createButton('left');
    const nextButton = createButton('right');
    const prevEvent = sliderm.eventAdapter(prevButton);
    const nextEvent = sliderm.eventAdapter(nextButton);

    getProperties().forEach((property) => {
      if (property.default !== property.value) {
        prevButton.style.setProperty(property.key, property.value);
        nextButton.style.setProperty(property.key, property.value);
      }
    });

    prevButton.append(setDom('span', `sliderm__icon-left--${getBoldType()}`));
    prevButton.classList.add(`sliderm__button--${getShape()}`);
    nextButton.append(setDom('span', `sliderm__icon-right--${getBoldType()}`));
    nextButton.classList.add(`sliderm__button--${getShape()}`);

    sliderm.getRoot().append(prevButton);
    sliderm.getRoot().append(nextButton);

    prevEvent.on('click', () => {
      sliderm.go('slide', '<');
    });

    nextEvent.on('click', () => {
      sliderm.go('slide', '>');
    });

    sliderm.on('destory', () => {
      prevButton.remove();
      nextButton.remove();
    });
  };

  init();
}
