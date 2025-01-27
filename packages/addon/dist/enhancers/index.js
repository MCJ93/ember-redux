import { compose } from 'redux';

var devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
var enhancers = compose(devtools);

export { enhancers as default };
//# sourceMappingURL=index.js.map
