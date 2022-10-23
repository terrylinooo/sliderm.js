import { cssEmptyItem } from '../selector';

/**
 * Handle the items when the option loop is enabled.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 */
export default function loop(sliderm, slider) {
  const isLoop = sliderm.getOption('loop');
  const isGrouping = sliderm.getOption('grouping');

  if (!isLoop || !isGrouping) {
    return;
  }

  const items = sliderm.getItems();
  const columns = sliderm.getOption('columns');
  const itemCount = sliderm.getItemCount();
  const theLastItem = items[items.length - 1];
  const count = columns - (itemCount % columns);
  const nodes = [];

  if (count === columns || columns === 1) {
    return;
  }

  for (let i = 1; i <= count; i += 1) {
    const clonedNode = theLastItem.cloneNode(true);
    clonedNode.classList.add(cssEmptyItem);
    clonedNode.innerHTML = '';
    slider.appendChild(clonedNode);
    nodes.push(clonedNode);
  }

  sliderm.updateCurrentItems();

  sliderm.on('destory', () => {
    nodes.forEach((node) => {
      node.remove();
    });
  });
}
