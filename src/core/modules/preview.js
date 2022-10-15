/**
 * Preview the edge of the previois and next item.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 */
export default function preview(sliderm, slider) {
  const isPreview = sliderm.getOption('preview');
  if (!isPreview) {
    return;
  }
  const edge = sliderm.getOption('preview.edge');
  slider.style.setProperty('padding', `0 ${edge}px`);

  sliderm.on('destory', () => {
    slider.style.removeProperty('padding');
  });
}
