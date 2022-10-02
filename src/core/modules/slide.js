import { goPreviousItem, goPreviousGroup } from './slide/previous';
import { goNextItem, goNextGroup } from './slide/next';
import { queue } from '../../utilities/await';

/**
 * Position the slide items horizontally.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {...any} args The arguments
 */
export default function slide(sliderm, ...args) {
  const [direction] = args;
  const items = sliderm.getItems();
  const itemCount = sliderm.getItemCount();
  const groupCount = sliderm.getGroupCount();
  const isGrouping = sliderm.getOption('grouping');
  const columns = sliderm.getOption('columns');
  const duration = sliderm.getOption('duration');
  const originalPosition = sliderm.getCurrentIndex() + 1;
  const unitCount = isGrouping ? groupCount : itemCount;
  let currentPagi = originalPosition;
  let activePagi = 0;
  let arrow = direction;
  let steps = 1;

  if (isGrouping) {
    const originalGroup = Math.ceil(originalPosition / columns);
    currentPagi = originalGroup;
  }

  if (typeof direction === 'number') {
    arrow = direction > currentPagi ? '>' : '<';
    steps = direction > currentPagi ? direction - currentPagi : currentPagi - direction;
    activePagi = direction;
  } else if (direction === '>') {
    activePagi = currentPagi + 1;
    if (activePagi > unitCount) {
      activePagi = 1;
    }
  } else if (direction === '<') {
    activePagi = currentPagi - 1;
    if (activePagi === 0) {
      activePagi = unitCount;
    }
  }

  if (currentPagi === activePagi) {
    return;
  }

  sliderm.emit('slide.start', activePagi);

  for (let i = 1; i <= steps; i += 1) {
    const thisDuration = (i - 1) * duration;
    if (arrow === '<') {
      if (isGrouping) {
        queue(() => goPreviousGroup(sliderm, items, itemCount, groupCount), thisDuration);
      } else {
        queue(() => goPreviousItem(sliderm, items, itemCount), thisDuration);
      }
    } else if (arrow === '>') {
      if (isGrouping) {
        queue(() => goNextGroup(sliderm, items, itemCount, groupCount), thisDuration);
      } else {
        queue(() => goNextItem(sliderm, items, itemCount), thisDuration);
      }
    }
  }

  sliderm.emit('slide.end', activePagi);
}
