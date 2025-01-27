import Component from '@ember/component';
import wrapEs2019Class from './es2015-class.js';
import octaneConnect from './octane-connect.js';

function isClassicComponent(component) {
  // Not finding any other better way check component is classic or octane
  return component.toString() === '@ember/component' && component.reopenClass;
}
var connect = (stateToComputed, dispatchToActions = () => ({})) => {
  return IncomingComponent => {
    const WrappedComponent = IncomingComponent || Component;
    if (isClassicComponent(WrappedComponent)) {
      return wrapEs2019Class(stateToComputed, dispatchToActions, WrappedComponent);
    }
    return octaneConnect(stateToComputed, dispatchToActions, WrappedComponent);
  };
};

export { connect as default };
//# sourceMappingURL=connect.js.map
