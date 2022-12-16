import { legacy_createStore, combineReducers, compose } from 'redux';
import ServiceListReducer from '../reducers/serviceListReducer';
import ServiceAddReducer from '../reducers/serviceAddReducer';

const ReactreduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      ServiceList: ServiceListReducer,
      ServiceAdd: ServiceAddReducer,
    }),
    undefined,
    compose(
      ReactreduxDevTools,
    )
  )
}

export default configureStore;

