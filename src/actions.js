
import { CHANGE_SEARCH_FIELD } from './constants.js';

export const setSearchField = (text) => ({ // will receive as input the text that the user types
 
    type: CHANGE_SEARCH_FIELD, // and will return an object with the action type and the data which is needed for the reducer
    payload: text
})

// this action will get dispatched into the reducer by the connect method