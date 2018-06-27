import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import settingsReducer from './reducers/SettingsReducer'
import otherReducer from './reducers/OtherReducer'


const masterReducer = combineReducers({
    settings: settingsReducer,
    other: otherReducer
})

const defaultState = {
    settings: {
        interval: 25,
        height: 417,
        width: 1326,
    }
}

const store = createStore(
    masterReducer,
    { ...defaultState },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
