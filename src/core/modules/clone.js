import selector from '../selector';

/**
 * Clone the slide items to the left and right sides.
 *
 * @param {Object} sliderm The Sliderm instance.
 * @param {Element} slider The DOM element of the slider container.
 * @param {...any} args The arguments
 */
export default function clone(sliderm, slider, ...args) {
  const [item, index] = args;
  const columns = sliderm.getOption('columns');
  const itemCount = sliderm.getItemCount();
  const items = sliderm.getItems();
  const className = selector.cloneItem.substring(1);
  const sideCount = columns;
  const clonedNode = item.cloneNode(true);
  let insertedClonedNode = null;
  let isInserted = false;

  clonedNode.classList.add(className);

  if (index < sideCount) {
    slider.appendChild(clonedNode);
    isInserted = true;
  }

  if (index >= itemCount - sideCount) {
    if (isInserted) {
      insertedClonedNode = item.cloneNode(true);
      insertedClonedNode.classList.add(className);
      // Insert before the first slide item.
      slider.insertBefore(insertedClonedNode, items[0]);
    } else {
      slider.insertBefore(clonedNode, items[0]);
    }
  }

  sliderm.on('destory', () => {
    clonedNode.remove();
    if (insertedClonedNode) {
      insertedClonedNode.remove();
    }
  });
}
