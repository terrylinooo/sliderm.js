import Position from './position';
import { queue } from '../../utilities/await';

/**
 * Position the slide items horizontally.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 * @param {...any} args The arguments
 */
export default function slide(sliderm, slider, ...args) {
  const [direction] = args;
  const isGrouping = sliderm.getOption('grouping');
  const duration = sliderm.getOption('duration');
  const columns = sliderm.getOption('columns');
  const isLoop = sliderm.getOption('loop');
  const width = sliderm.getItems()[0].offsetWidth;
  const position = new Position(sliderm);
  const maxPosition = position.maximum();
  let calculatedPosition = position.calculate(direction, isLoop);
  let isReposition = false;
  let distance = 1;
  let axis = 0;

  if (calculatedPosition < 1) {
    isReposition = true;
  } else if (calculatedPosition > maxPosition) {
    isReposition = true;
  }

  if (isGrouping) {
    distance = 0 - calculatedPosition;
    axis = width * distance * columns;
  } else {
    distance = 1 - columns - calculatedPosition;
    axis = width * distance;
  }

  // Event: slide.start
  sliderm.emit('slide.start', calculatedPosition);

  // Start sliding.
  sliderm.go('transition');
  sliderm.go('transform', axis);
  sliderm.updatePosition(calculatedPosition);

  if (isReposition) {
    queue(() => {
      calculatedPosition = position.calculate(direction, false);

      if (isGrouping) {
        distance = 0 - calculatedPosition;
        axis = width * distance * columns;
      } else {
        distance = 1 - columns - calculatedPosition;
        axis = width * distance;
      }

      sliderm.go('transition', 'stop');
      sliderm.go('transform', axis);
      sliderm.updatePosition(calculatedPosition);

      // Event: slide.end
      sliderm.emit('slide.end', calculatedPosition);
    }, duration + 10);
  } else {
    // Event: slide.end
    sliderm.emit('slide.end', calculatedPosition);
  }
}
