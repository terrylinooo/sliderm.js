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
     * Display the edge of the previous and next items.
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
     * The spinner's color.
     *
     * @type {String}
     */
    color: '#1cbbb4',
  },
};
