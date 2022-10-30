import { components, modules } from './core/extenstion';
import { cssSliderContainer } from './core/selector';
import { getDom, findDom } from './utilities/dom';
import EventDispatcher from './core/events/event-dispatcher';
import EventAdapter from './core/events/event-adapter';
import { error } from './utilities/console';
import config from './core/config';
import Page from './core/modules/page';

/**
 * Main class.
 */
export default class Sliderm {
  constructor(el, options) {
    const root = getDom(el);
    if (!root) {
      error(`The DOM "${el}" is invalid.`);
      return;
    }
    this.options = Object.assign(config, options);
    this.event = new EventDispatcher();
    this.page = new Page(this);
    this.root = root;
    this.initialized = false;
    this.domEvents = [];
    this.itemCount = 0;
    this.position = 1;
    this.modules = {};
    this.slider = findDom(this.root, `.${cssSliderContainer}`);
    this.items = [];
    this.#initialize();
  }

  /**
   * Initialize Sliderm HTML structure.
   */
  #initialize() {
    // Event: initialize
    this.emit('initialize');

    this.#updateItems();
    this.#updateGroupCount();
    this.#beforeMountExtensions();
    this.#mountExtensions();
    this.go('init');
    this.go('breakpoint');
    this.go('loop');
    this.go('align');
    this.go('touch');
    this.go('preview');
    this.go('autoplay');
    this.items.forEach((item, index) => {
      this.go('columns', item);
      this.go('spacing', item);
      this.go('grouping', item, index);
      this.go('clone', item, index);
    });
    this.slideTo(1);
    this.initialized = true;

    // Event: initialized
    this.emit('initialized');
  }

  /**
   * Mount core-modules and view-components.
   */
  #mountExtensions() {
    for (let i = 0; i < modules.length; i += 1) {
      if (typeof modules[i] === 'function') {
        this.modules[modules[i].name] = modules[i];
      }
    }
    for (let i = 0; i < components.length; i += 1) {
      if (typeof components[i] === 'function' && this.getOption(components[i].name)) {
        components[i](this);
      }
    }
  }

  /**
   * Update slide items.
   */
  #updateItems() {
    this.items = Array.from(findDom(this.root, `.${cssSliderContainer}`).children);
    this.itemCount = this.items.length;
  }

  /**
   * Update group count.
   */
  #updateGroupCount() {
    const columns = this.getOption('columns');
    this.groupCount = Math.ceil(this.itemCount / columns);
  }

  /**
   * Install customized extensions.
   */
  #beforeMountExtensions() {
    for (let i = 0; i < this.options.extensions.length; i += 1) {
      const extName = this.options.extensions[i].name;
      if (extName !== '') {
        const extension = this.options.extensions[i];
        if (this.options[extName] === undefined) {
          modules.push(extension);
        } else {
          components.push(extension);
        }
      }
    }
  }

  /**
   * Create an Event Adapter on a DOM element.
   * We also collect the references here for destorying them later.
   *
   * @param {Element} node DOM element
   * @return {EventAdapter}
   */
  adaptEvent(node) {
    const event = new EventAdapter(node);
    this.domEvents.push(event);
    return event;
  }

  /**
   * Get the Page instance.
   *
   * @return {Page}
   */
  getPage() {
    return this.page;
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
   * Get the current position in the visible area of slider.
   *
   * @return {Number}
   */
  getPosition() {
    return this.position;
  }

  /**
   * Update the current position number.
   *
   * @param {Number} position The postition number.
   */
  updatePosition(position) {
    this.position = position;
  }

  /**
   * Update current items.
   * This method can not be called after initializing.
   *
   * @return {Boolean}
   */
  updateCurrentItems() {
    if (this.initialized) {
      return false;
    }
    this.#updateItems();
    this.#updateGroupCount();
    return true;
  }

  /**
   * Get an option.
   *
   * @param {String} field The name of a field in options.
   * @param {Mixed} defailts The default value as the field doesn't exists.
   * @return {Mixed}
   */
  getOption(field, defaults = null) {
    const option = this.options[field] !== undefined ? this.options[field] : defaults;
    if (field.includes('.')) {
      try {
        const [a, b] = field.split('.');
        return this.options[`_${a}`][b];
      } catch (err) {
        return defaults;
      }
    }
    return option;
  }

  /**
   * Update an option.
   *
   * @param {String} field The name of a field in options.
   * @param {Mixed} value The value to update the field.
   */
  updateOption(field, value) {
    if (field.includes('.')) {
      try {
        const [a, b] = field.split('.');
        this.options[`_${a}`][b] = value;
        // eslint-disable-next-line no-empty
      } catch (err) {}
      return;
    }
    this.options[field] = value;
  }

  /**
   * Slide to specific pagination.
   *
   * @param {Number|String} pagination
   * Number for the pagination number. Expected value: [0-9]+
   * String for the direction. Expected value: > | <
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
   * @param {String} name The event name.
   * @param {Function} handler The callback function.
   */
  on(name, handler) {
    this.event.on(name, handler);
  }

  /**
   * Remove an event listener.
   *
   * @param {String} name The event name.
   * @param {Function} handler The callback function.
   */
  off(name, handler) {
    this.event.off(name, handler);
  }

  /**
   * Execute the registered function.
   *
   * @param {String} name The event name of each event listener.
   * @param {...any} args The agruments.
   */
  emit(name, ...args) {
    const thisArgs = [this, ...args];
    this.event.emit(name, ...thisArgs);
  }

  /**
   * Destory appended DOM and attched events.
   */
  destory() {
    this.event.emit('destory');
    this.event.destory();
    this.domEvents.forEach((event) => {
      event.destory();
    });
  }
}
