/**
 * Here are the deafult settings of the built-in features.
 * The detailed settings for the features has a prefix string "_" with them.
 */
export default {
  /**
   * Display the arrow buttons.
   *
   * @type {Boolean}
   */
  arrow: true,

  /**
   * Display the pagination, dot, dot, dots.
   *
   * @type {Boolean}
   */
  pagination: true,

  /**
   * Display the spinner when loading the slider.
   *
   * @type {Boolean}
   */
  spinner: true,

  /**
   * Slide column group or just single column group.
   *
   * @type {Boolean}
   */
  grouping: false,

  /**
   * Transform the slider into a carousel.
   *
   * @type {Boolean}
   */
  loop: true,

  /**
   * Preview a part of the previous and next item.
   *
   * @type {Boolean}
   */
  preview: false,

  /**
   * Make the slider responsive.
   *
   * @type {Boolean}
   */
  breakpoint: true,

  /**
   * Add support for mobile devices to touch left and right swipe.
   *
   * @type {Boolean}
   */
  touch: true,

  /**
   * Autoplay the carousel.
   *
   * @type {Boolean}
   */
  autoplay: false,

  /**
   * How many items per view
   *
   * @type {Boolean}
   */
  columns: 4,

  /**
   * The duration of transition.
   *
   * @type {Number}
   */
  duration: 1000,

  /**
   * The spacing between each item.
   *
   * @type {Number}
   */
  spacing: 10,

  /**
   * Align the slide items vertically.
   * Expected value: top | center | bottom
   *
   * @type {String}
   */
  align: 'center',

  /**
   * Install the customized functional modules and view components.
   * Each extension is a named function, an anonymous function is not acceptable here.
   *
   * An extension is identified as a view component if an option's key is fit to
   * the function's name, otherwise as a functional module.
   */
  extensions: [],

  /**
   * The customized options for arrow buttons.
   *
   * @type {Object}
   */
  _arrow: {
    /**
     * The arrow icon's color.
     *
     * @type {String}
     */
    color: '#ffffff',

    /**
     * The background color of the arrow's container.
     *
     * @type {String}
     */
    bgColor: '#000000',

    /**
     * The opacity of the arrow's container.
     *
     * @type {Number}
     */
    opacity: 0.5,

    /**
     * The size of the arrow icons.
     * Expected value: 13 - 28
     *
     * @type {Number}
     */
    size: 16,

    /**
     * The shape of the arrow icon.
     * Expected value: circle | square | none
     *
     * @type {String}
     */
    shape: 'circle',

    /**
     * The bold of the arrow icon.
     * Expected value: 1 | 2 | 3
     *
     * @type {Number}
     */
    bold: 2,
  },

  /**
   * The customized options for Preview.
   *
   * @type {Object}
   */
  _preview: {
    /**
     * The width of the edge of the previous and next items.
     *
     * @type {Number}
     */
    edge: 40,
  },

  /**
   * The customized options for spinner.
   *
   * @type {Object}
   */
  _spinner: {
    /**
     * The color of the spinner.
     *
     * @type {String}
     */
    color: '#1cbbb4',
  },

  /**
   * The customized options for responsive.
   *
   * @type {Object}
   */
  _breakpoint: {
    /**
     * The breakpoints used to change the columns in visible area of the slider.
     * To disable the breakpoint, set it to false.
     *
     * @type {Object}
     */
    columns: {
      4: false,
      3: 960,
      2: 768,
      1: 420,
    },
  },

  /**
   * The customized options for touch.
   *
   * @type {Object}
   */
  _touch: {
    /**
     * The minimum distance traveled to be considered a swipe.
     *
     * @type {Number} pixel
     */
    threshold: 10,
    /**
     * The maximum time spent to be considered a swipe.
     *
     * @type {Number} millisecond
     */
    duration: 300,
  },

  /**
   * The customized options for autoplay.
   *
   * @type {Object}
   */
  _autoplay: {
    /**
     * The direction that slider items will move on.
     *
     * @type {String}
     */
    direction: 'right',
    /**
     * The time to stay and then play the next.
     *
     * @type {Number} millisecond
     */
    duration: 5000,
  },
};
