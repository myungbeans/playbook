import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import settingsReducer from './reducers/SettingsReducer'
import authReducer from './reducers/AuthReducer'


const masterReducer = combineReducers({
    settings: settingsReducer,
    auth: authReducer,
    routing: routerReducer,
})

export const defaultState = {
    settings: {
        interval: 25,
        height: 417,
        width: 1326,
    },
    auth: ""
}

const store = createStore(
    masterReducer,
    { ...defaultState },
    window.devToolsExtension && window.devToolsExtension()
);

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
