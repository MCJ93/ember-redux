import { get } from '@ember/object';
import { assert } from '@ember/debug';
import { isArray } from '@ember/array';
import Service from '@ember/service';
import redux$1 from 'redux';
import reducers from '../reducers/index.js';
import enhancers from '../enhancers/index.js';
import middlewares from '../middleware/index.js';

// Handle "classic" middleware exports (i.e. an array), as well as the hash option
const extractMiddlewareConfig = mc => {
  assert('Middleware must either be an array, or a hash containing a `middleware` property', isArray(mc) || mc.middleware);
  return isArray(mc) ? {
    middleware: mc
  } : mc;
};
const {
  createStore,
  applyMiddleware,
  compose
} = redux$1;
const makeStoreInstance = ({
  middlewares,
  reducers,
  enhancers
}) => {
  const {
    middleware,
    setup = () => {}
  } = extractMiddlewareConfig(middlewares);
  const createStoreWithMiddleware = compose(applyMiddleware(...middleware), enhancers)(createStore);
  const store = createStoreWithMiddleware(reducers);
  setup(store);
  return store;
};
var redux = Service.extend({
  middlewares,
  reducers,
  enhancers,
  makeStoreInstance,
  init() {
    const enhancers = get(this, 'enhancers');
    const reducers = get(this, 'reducers');
    const middlewares = get(this, 'middlewares');
    this.store = this.makeStoreInstance({
      middlewares,
      reducers,
      enhancers
    });
    this._super(...arguments);
  },
  getState() {
    return this.store.getState();
  },
  dispatch(action) {
    return this.store.dispatch(action);
  },
  subscribe(func) {
    return this.store.subscribe(func);
  },
  replaceReducer(nextReducer) {
    return this.store.replaceReducer(nextReducer);
  }
});

export { redux as default };
//# sourceMappingURL=redux.js.map
