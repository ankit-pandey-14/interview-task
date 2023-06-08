import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reducers';
import middlewares from './middlewares';

const configureStore = () => {
    const reactEnhacers = compose(applyMiddleware(...middlewares));
    const store = createStore(reducers, reactEnhacers);
    return store;
};

export default configureStore();