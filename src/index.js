import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './containers/App.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import { searchRobots} from './reducers'

const store = createStore(searchRobots);
//provider components will make sure the store will drip down to every conponent in the component tree
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
