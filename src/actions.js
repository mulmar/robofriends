import { apiCall } from './api/api';
import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,  
    REQUEST_ROBOTS_SUCCES,  
    REQUEST_ROBOTS_FAIL 
    } from './constants.js';

export const setSearchField = (text) => ({ // will receive as input the text that the user types
 
    type: CHANGE_SEARCH_FIELD, // and will return an object with the action type and the data which is needed for the reducer
    payload: text
})

// this action will get dispatched into the reducer by the connect method

export const requestRobots = () => (dispatch) => { // higer order function: it will return the dispatch function instead of an object
    dispatch({type: REQUEST_ROBOTS_PENDING});
    apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCES,  payload: data}))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error}))
}
 