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
import homepageReducer from './reducers/HomePageReducer'
import playbookMenuReducer from './reducers/PlaybookMenuReducer'

const masterReducer = combineReducers({
    settings: settingsReducer,
    homepage: homepageReducer,
    players: playbookMenuReducer,
    routing: routerReducer,
})

export const defaultState = {
    settings: {
        interval: 25,
        height: 417,
        width: 1326,
    },
    homepage: {
        myPlays:[],
        selectedPlay: "",
    },
    players: {
        roster: {},
        selectedPlayer: ""
    },
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
