import config from './core/config';
import { cssSliderContainer } from './core/selector';
import { components, modules } from './core/extenstion';
import EventDispatcher from './core/events/event-dispatcher';
import EventAdapter from './core/events/event-adapter';
import { getDom, findDom } from './utilities/dom';
import { error } from './utilities/console';

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
    this.domEvents = [];
    this.root = root;
    this.slider = findDom(this.root, `.${cssSliderContainer}`);
    this.items = [];
    this.itemCount = 0;
    this.position = 1;
    this.modules = {};
    this.emit('initialize');
    this.#updateItems();
    this.#updateGroupCount();
    this.#installExtensions();
    this.#mountModules();
    this.#initialize();
    this.slideTo(1);
    this.emit('initialized');
  }

  /**
   * Initialize Sliderm HTML structure.
   */
  #initialize() {
    this.go('init');
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
  #installExtensions() {
    for (let i = 0; i < this.options.extensions; i += 1) {
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
  eventAdapter(node) {
    const event = new EventAdapter(node);
    this.domEvents.push(event);
    return event;
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
    const option = this.options[field] !== undefined ? this.options[field] : defaults;
    if (field.includes('.')) {
      try {
        const subOptions = field.split('.');
        return this.options[`_${subOptions[0]}`][subOptions[1]];
      } catch (err) {
        error(err);
        return defaults;
      }
    }
    return option;
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
