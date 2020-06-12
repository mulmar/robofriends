
import { CHANGE_SEARCH_FIELD } from './constants.js';

export const setSearchField = (text) => { // will receive as input the text that the user types
    console.log(text);
    return {
    type: CHANGE_SEARCH_FIELD, // and will return an object with the action type and the data which is needed for the reducer
    payload: text
    }
}