import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default function configurStore() {

    const logger = createLogger();

    const store = compose(
        applyMiddleware(thunkMiddleware)
        //applyMiddleware(createLogger())
    )(createStore)(rootReducer);


    return store;
}
