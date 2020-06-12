import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {  // function receives the state and an action type....
   // console.log(action.type);
    switch(action.type) { // and if the action type is related to searching robots (tye == CHANGE_SEARCH_FIELD) ..... 
        case CHANGE_SEARCH_FIELD: // if the action type = Change_searchfield then....
            return Object.assign({}, state, {searchField:action.payload})// return a new state which is: object which includes everything the current state has, and update the searchfield-content in State through the action
        default: //we always need to return something, so if the actiontype was not related to searching robots we will return the current state.
            return state;
    }
}

// the reducer will based on the received action changes the state (create new state with 1 field updated) into the store