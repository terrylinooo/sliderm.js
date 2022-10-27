import { queue } from '../../utilities/await';

/**
 * Position the slide items horizontally.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 * @param {...any} args The arguments
 */
export default function slide(sliderm, slider, ...args) {
  const [direction, command] = args;
  const isGrouping = sliderm.getOption('grouping');
  const isPreview = sliderm.getOption('preview');
  const duration = sliderm.getOption('duration');
  const columns = sliderm.getOption('columns');
  const isLoop = sliderm.getOption('loop');
  const width = sliderm.getItems()[0].offsetWidth;
  const page = sliderm.getPage();
  const isClone = isLoop || isPreview;
  const maxPosition = page.maximum();
  let calculatedPosition = page.calculate(direction, false);
  const isReposition = calculatedPosition < 1 || calculatedPosition > maxPosition;
  let distance = 1;
  let axis = 0;

  if (!isLoop && isReposition) {
    return;
  }

  if (isGrouping) {
    distance = 0 - (isClone ? 0 : -1) - calculatedPosition;
    axis = width * distance * columns;
  } else {
    distance = 1 - (isClone ? columns : 0) - calculatedPosition;
    axis = width * distance;
  }

  // Event: slide.start
  sliderm.emit('slide.start');

  // Start sliding.
  sliderm.go('transition', command);
  sliderm.go('transform', axis);
  sliderm.updatePosition(calculatedPosition);

  if (isReposition) {
    queue(() => {
      calculatedPosition = page.calculate(direction, isReposition);

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
      sliderm.emit('slide.end');
    }, duration + 10);
  } else {
    // Event: slide.end
    sliderm.emit('slide.end');
  }
}
