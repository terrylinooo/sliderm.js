/**
 * Preview the edge of the previois and next item.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 */
export default function preview(sliderm, slider) {
  const isPreview = sliderm.getOption('preview');
  const edge = sliderm.getOption('edge');

  if (!isPreview) {
    return;
  }

  slider.style.setProperty('padding', `0 ${edge}px`);
}
