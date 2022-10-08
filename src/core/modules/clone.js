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
  let clondedNode = item.cloneNode(true);
  let isInserted = false;

  clondedNode.classList.add(className);

  if (index < sideCount) {
    slider.appendChild(clondedNode);
    isInserted = true;
  }

  if (index >= itemCount - sideCount) {
    if (isInserted) {
      clondedNode = item.cloneNode(true);
      clondedNode.classList.add(className);
    }
    slider.insertBefore(clondedNode, items[0]);
  }
}
