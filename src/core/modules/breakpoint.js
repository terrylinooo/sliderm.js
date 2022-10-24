/**
 * Make the slider mobile-friendly.
 *
 * @param {Object} sliderm The Sliderm object.
 * @param {Element} slider The DOM element of the slider container.
 */
export default function breakpoint(sliderm, slider) {
  if (!sliderm.getOption('breakpoint')) {
    return;
  }

  /**
   * Calculate the current column number for the breakpoint.
   *
   * @param {Object} breakpoints The breakpoint settings.
   * @param {Number} columns The columns setting.
   * @return {Number}
   */
  const calculate = (breakpoints, columns) => {
    const width = window.innerWidth;
    const current = Object.keys(breakpoints).filter((key) => width < breakpoints[key]);
    return typeof current[0] !== 'undefined' ? Number(current[0]) : columns;
  };

  /**
   * Initialize.
   */
  const init = () => {
    const columns = sliderm.getOption('columns');
    const breakpoints = sliderm.getOption('breakpoint.columns');
    const current = Number(slider.getAttribute('data-columns'));
    const column = calculate(breakpoints, columns);
    slider.setAttribute('data-columns', columns);

    if (column !== undefined && current !== column) {
      const items = sliderm.getItems();
      sliderm.updateOption('columns', column);
      sliderm.updateCurrentItems();

      for (let i = 0; i < items.length; i += 1) {
        sliderm.go('columns', items[i]);
      }

      // Notice others the breakpoint has changed.
      sliderm.emit('breakpoint.changed');
    }
  };

  init();
}
