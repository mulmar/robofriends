import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './containers/App.css';
import App from './containers/App';
import thunkMiddleware from 'redux-thunk' // middleWare needed for ASYNC Actions. It waits and sees if any action return a function instead of an object
import { createLogger} from 'redux-logger' // is very usefull for logging the state
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { Provider} from 'react-redux'; // needed to provide the state (=store) to all the components downs the component tree
import { createStore, applyMiddleware, combineReducers } from 'redux'; // needed to create the store and accept redux middleware (in this case for logging)
import { searchRobots, requestRobots } from './reducers'; // import the reducer which needs to be passed into the store

const logger = createLogger(); // run the logger fuction

const rootReducer = combineReducers({searchRobots, requestRobots}) //combine all the reducers

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //activate the Middleware (between action and Reducer) and use logger
//provider components will make sure the store will drip down to every conponent in the component tree
//console.log(store.getState());
ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>
, document.getElementById('root')
);// execute the App.js (and all it's sub components) in the div of the index.html with the div with id=root

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
