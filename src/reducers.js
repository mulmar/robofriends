import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,  
    REQUEST_ROBOTS_SUCCES,  
    REQUEST_ROBOTS_FAIL 
    } from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {  // function receives the state and an action type....
    switch(action.type) { // and if the action type is related to searching robots (tye == CHANGE_SEARCH_FIELD) ..... 
        case CHANGE_SEARCH_FIELD: // if the action type = Change_searchfield then....
            return Object.assign({}, state, {searchField: action.payload})// return a new state which is: object which includes everything the current state has, and update the searchfield-content in State through the action
        default: //we always need to return something, so if the actiontype was not related to searching robots we will return the current state.
            return state;
    }
}

// the reducer will based on the received action changes the state (create new state with 1 field updated) into the store
const initialStateRobots = {
    isPending: true,
    error: '',
    robots: []
}

export const requestRobots = (state=initialStateRobots, action={}) => {  // function receives the state and an action type....
    switch(action.type) { 
        case REQUEST_ROBOTS_PENDING: 
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCES: 
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAIL: 
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default: 
            return state;
    }
}