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
import playbookReducer from './reducers/PlaybookReducer'
import moveReducer from './reducers/MoveReducer'

const masterReducer = combineReducers({
    settings: settingsReducer,
    homepage: homepageReducer,
    players: playbookReducer,
    moves: moveReducer,
    routing: routerReducer,
})

export const defaultState = {
    settings: {
        interval: 30,
        height: 417,
        width: 1326,
        loading: false,
    },
    homepage: {
        myPlays:[],
        selectedPlay: parseInt(localStorage.getItem("selectedPlay"), 8) || "",
    },
    players: {
        roster: {},
        selectedPlayer: "",
    },
    moves: {
        points: {},
        moveIndex: "",
        activeEndPoints: {},
    }
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
