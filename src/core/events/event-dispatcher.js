/**
 * Implement the observer pattern to give abilities for modules
 * for connecting each other.
 */
export default class eventDispatcher {
  constructor() {
    this.events = {};
  }

  /**
   * Register an event listener.
   *
   * @param {String} name The event name of each event listener.
   * @param {Function} handler The callback function of each event listener.
   * @param {Number} priority The priority of each event listener.
   */
  on(name, handler, priority = 0) {
    if (!Object.prototype.hasOwnProperty.call(this.events, name)) {
      this.events[name] = [];
    }
    this.events[name][priority] = handler;
  }

  /**
   * Remove an event listener.
   *
   * @param {String} name The event name of each event listener.
   * @param {Number} priority The priority of each event listener.
   */
  off(name, priority) {
    if (priority !== undefined) {
      const index = this.events[name].indexOf(priority);
      if (index !== -1) {
        this.events[name].splice(index, 1);
      }
      return;
    }
    delete this.events[name];
  }

  /**
   * Execute the registered closure.
   *
   * @param {String} name The event name of each event listener.
   * @param {Number} priority The priority of each event listener.
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
