import Sliderm from './sliderm';
import shape3d from './components/shape-3d';

/**
 * Sliderm will keep it's weight as light as possible.
 * Additional features will be added in Sliderm Plus.
 */
class SlidermPlus extends Sliderm {
  constructor(el, options = {}) {
    const plusOptions = { ...options };
    if (typeof plusOptions.extensions === 'undefined') {
      plusOptions.extensions = [];
    }
    plusOptions.extensions.push(shape3d);
    super(el, plusOptions);
  }
}

window.Sliderm = SlidermPlus;
