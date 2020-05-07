import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import { routerMiddleware } from 'react-router-redux';
const createHistory = require('history').createBrowserHistory;

const history = createHistory();
const middlewares = routerMiddleware(history);

const configStore = createStore(
        reducers,
        applyMiddleware(middlewares)
    )


export { configStore, history };