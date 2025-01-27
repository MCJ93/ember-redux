import { warn } from '@ember/debug';

// please write your own index.js that exports legit reducers
//
// import { combineReducers } from 'redux';
// const foobar = (state, action) => {
//   //reducer code here
// };
//
// export default combineReducers({
//   foobar
// })
function reducers (state) {
  warn(`You haven't created a reducer yet. Place the root reducer in "app/reducers/index.js"`, null, {
    id: 'ember-redux.default-reducer'
  });
  return state;
}

export { reducers as default };
//# sourceMappingURL=index.js.map
