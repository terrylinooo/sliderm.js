import { cssWrapper } from '../selector';
import { queue } from '../../utilities/await';

/**
 * Do things in the initializing statge.
 *
 * @param {Object} sliderm The Sliderm object.
 */
export default function init(sliderm) {
  const duration = sliderm.getOption('duration');
  const root = sliderm.getRoot();
  root.classList.add(cssWrapper);
  root.classList.remove(`${cssWrapper}--initialized`);
  root.classList.add(`${cssWrapper}--initialize`);

  sliderm.on('initialized', () => {
    queue(() => {
      root.classList.remove(`${cssWrapper}--initialize`);
      root.classList.add(`${cssWrapper}--initialized`);
    }, duration + 50);
  });
}
