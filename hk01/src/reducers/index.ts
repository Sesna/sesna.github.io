import { combineReducers } from 'redux'
import {
    CONSTANTS
} from '../actions'

const { KEY_WORD } = CONSTANTS

function keyWord(state = '', action: { type : string, value : string }) {
    if(action.type === KEY_WORD) {
        return action.value
    }
    return state
}

export default combineReducers({
    keyWord
})