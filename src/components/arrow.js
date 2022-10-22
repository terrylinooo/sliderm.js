import { setDom } from '../utilities/dom';
import { size, bold, shape, color, bgColor, opacity } from './arrow/options';
import { cssButtonNext, cssButtonPrev } from '../core/selector';

/**
 * The view-component of Sliderm.
 * Create the "next button" and "previous button" on both sides of the slider.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @return {Object}
 */
export default function arrow(sliderm) {
  /**
   * Initialzie.
   */
  const init = () => {
    const properties = [size, bold, shape, color, bgColor, opacity];

    const prevButton = setDom('div', cssButtonPrev);
    const nextButton = setDom('div', cssButtonNext);
    const prevEvent = sliderm.adaptEvent(prevButton);
    const nextEvent = sliderm.adaptEvent(nextButton);
    let prevIcon = null;
    let nextIcon = null;

    for (let i = 0; i < properties.length; i += 1) {
      let { name } = properties[i];
      let value = properties[i](sliderm.getOption(`arrow.${name}`));

      if (value !== null) {
        if (name === 'bold') {
          prevIcon = setDom('span', `sliderm__icon-left--${value}`);
          nextIcon = setDom('span', `sliderm__icon-right--${value}`);
        } else if (name === 'shape') {
          prevButton.classList.add(`sliderm__button--${value}`);
          nextButton.classList.add(`sliderm__button--${value}`);
        } else {
          if (name === 'bgColor') {
            name = 'background-color';
          } else if (name === 'size') {
            name = 'font-size';
            value = `${value}px`;
          }
          prevButton.style.setProperty(name, value);
          nextButton.style.setProperty(name, value);
        }
      }
    }

    prevButton.append(prevIcon);
    nextButton.append(nextIcon);
    sliderm.getRoot().append(prevButton);
    sliderm.getRoot().append(nextButton);

    prevEvent.on('click', () => {
      sliderm.slideTo('<');
    });

    nextEvent.on('click', () => {
      sliderm.slideTo('>');
    });

    sliderm.on('destory', () => {
      prevButton.remove();
      nextButton.remove();
    });
  };

  init();
}
