import { defineProperty } from '@ember/object';
import { core, update, destroy } from './core.js';
import { inject } from '@ember/service';

function wrapEs2019Class(stateToComputed, dispatchToActions, WrappedComponent) {
  defineProperty(WrappedComponent.prototype, 'redux', inject('redux'));
  return class Connect extends WrappedComponent {
    constructor() {
      super(...arguments);
    }
    init() {
      core.call(this, stateToComputed, dispatchToActions);
      super.init(...arguments);
    }
    didUpdateAttrs() {
      super.didUpdateAttrs && super.didUpdateAttrs(...arguments);
      update.call(this);
    }
    willDestroy() {
      super.willDestroy(...arguments);
      destroy.call(this);
    }
  };
}

export { wrapEs2019Class as default };
//# sourceMappingURL=es2015-class.js.map
