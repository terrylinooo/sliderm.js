import config from './core/config';
import selector from './core/selector';
import { components, modules } from './core/extenstion';
import EventDispatcher from './core/events/event-dispatcher';
import dom from './utilities/dom';
import { error } from './utilities/console';

/**
 * Main class.
 */
class Sliderm {
  constructor(el, options) {
    const root = dom.get(el);
    if (!root) {
      error(`The DOM "${el}" is invalid.`);
      return;
    }
    this.options = Object.assign(config, options);
    this.event = new EventDispatcher();
    this.root = root;
    this.slider = dom.find(this.root, selector.sliderContainer);
    this.items = [];
    this.itemCount = 0;
    this.position = 1;
    this.liveItems = [];
    this.modules = {};
    this.#updateItems();
    this.#updateGroupCount();
    this.#mountModules();
    this.#initialize();
    this.#updateLiveItems();
    this.slideTo(1);
  }

  /**
   * Initialize Sliderm HTML structure.
   */
  #initialize() {
    this.items.forEach((item, index) => {
      this.go('width', item);
      this.go('spacing', item);
      this.go('grouping', item, index);
      this.go('clone', item, index);
    });
    this.go('align');
    this.go('preview');
  }

  /**
   * Mount core-modules and view-components.
   */
  #mountModules() {
    for (let i = 0; i <= components.length; i += 1) {
      if (typeof components[i] === 'function' && this.getOption(components[i].name)) {
        components[i](this);
      }
    }
    for (let i = 0; i <= modules.length; i += 1) {
      if (typeof modules[i] === 'function') {
        this.modules[modules[i].name] = modules[i];
      }
    }
  }

  /**
   * Update slide items.
   */
  #updateItems() {
    this.items = Array.from(dom.find(this.root, selector.sliderContainer).children);
    this.itemCount = this.items.length;
  }

  /**
   * Update slide items including cloned.
   */
  #updateLiveItems() {
    if (!this.itemCount) {
      return;
    }
    this.liveItems = Array.from(dom.find(this.root, selector.sliderContainer).children);
  }

  /**
   * Update group count.
   */
  #updateGroupCount() {
    const columns = this.getOption('columns');
    this.groupCount = Math.ceil(this.itemCount / columns);
  }

  /**
   * The root DOM of the slider.
   *
   * @return {Element}
   */
  getRoot() {
    return this.root;
  }

  /**
   * The slider container.
   *
   * @return {Element}
   */
  getContainer() {
    return this.sliderContainer;
  }

  /**
   * Get total of slides.
   *
   * @return {Number}
   */
  getItemCount() {
    return this.itemCount;
  }

  /**
   * Get group count.
   *
   * @return {Number}
   */
  getGroupCount() {
    return this.groupCount;
  }

  /**
   * Get the slide items.
   *
   * @return {Array}
   */
  getItems() {
    return this.items;
  }

  /**
   * Get the current position, right beign on the visable area of slider.
   *
   * @return {Array}
   */
  getPosition() {
    return this.position;
  }

  /**
   * Set the current position.
   *
   * @param {Number} position The postition number.
   * @return {Array}
   */
  updatePosition(position) {
    this.position = position;
  }

  /**
   * Get options.
   *
   * @param {String} field The name of a field in options.
   * @param {Mixed} defailts The default value as the field doesn't exists.
   * @return {Mixed}
   */
  getOption(field, defaults = null) {
    return this.options[field] !== undefined ? this.options[field] : defaults;
  }

  /**
   * Slide to specific pagination.
   *
   * @param {Number} pagination The pagination number.
   */
  slideTo(pagination) {
    this.go('slide', pagination);
  }

  /**
   * Call the module.
   *
   * @param {String} module The module name.
   * @param {Object} args The arguments.
   */
  go(module, ...args) {
    if (this.modules[module] === undefined) {
      error(`Invalid module name: ${module}`);
      return;
    }
    this.modules[module](this, this.slider, ...args);
  }

  /**
   * Register an event listener.
   *
   * @param {String} name The event name of each event listener.
   * @param {Function} handler The callback function of each event listener.
   * @param {Number} priority The priority of each event listener.
   */
  on(name, handler, priority = 0) {
    this.event.on(name, handler, priority);
  }

  /**
   * Remove an event listener.
   *
   * @param {String} name The event name of each event listener.
   * @param {Number} priority The priority of each event listener.
   */
  off(name, priority) {
    this.event.off(name, priority);
  }

  /**
   * Execute the registered closure function.
   *
   * @param {String} name The event name of each event listener.
   * @param {Number} priority The priority of each event listener.
   */
  emit(name, ...args) {
    this.event.emit(name, ...args);
  }
}

window.Sliderm = Sliderm;
