/**
 * Implement the observer pattern to give abilities for modules
 * for connecting each other.
 */
export default class EventDispatcher {
  constructor() {
    this.events = {};
  }

  /**
   * Register an event listener.
   *
   * @param {String} name The event name.
   * @param {Function} handler The callback function.
   */
  on(name, handler) {
    if (!Object.prototype.hasOwnProperty.call(this.events, name)) {
      this.events[name] = [];
    }
    this.events[name].push(handler);
  }

  /**
   * Remove an event listener.
   *
   * @param {String} name The event name.
   * @param {Function} handler Named function used to indicate the memory reference to remove it.
   */
  off(name, handler) {
    if (handler !== undefined) {
      this.events[name].forEach((item, index) => {
        if (item === handler) {
          this.events[name].splice(index, 1);
        }
      });
      return;
    }
    delete this.events[name];
  }

  /**
   * Execute the registered closure.
   *
   * @param {String} name The event name.
   * @param {...any} args The agruments.
   */
  emit(name, ...args) {
    if (this.events[name] === undefined || !Array.isArray(this.events[name])) {
      return;
    }
    this.events[name].forEach((closure) => {
      closure(...args);
    });
  }

  /**
   * As you see, destory everything.
   */
  destory() {
    delete this.events;
  }
}
