import { combineReducers } from 'redux'
import {
    CONSTANTS, Action
} from '../actions'

const {
    KEY_WORD,
    TOP_LOADING,
    TOP_LOADED,
    TOP_APPENDING,
    TOP_APPENDED,
    GROSS_LOADING,
    GROSS_LOADED
} = CONSTANTS

function keyWord(state = '', action: Action) {
    if(action.type === KEY_WORD) {
        return action.value
    }
    return state
}

const defaultTopState = {
    loading    : true,
    appending  : false,
    list       : [],
    start      : 0,
    limit      : 10
}

function topList(state: any = defaultTopState, action: Action) {
    switch (action.type) {
        case TOP_LOADING:
            return Object.assign({}, state, { loading : true })
        case TOP_LOADED:
            return Object.assign({}, state, {
                loading : false,
                list    : action.value,
                start   : action.start
            })
        case TOP_APPENDING:
            return Object.assign({}, state, { appending : true })
        case TOP_APPENDED:
            return Object.assign({}, state, {
                appending : false,
                list      : state.list.concat(action.value),
                start     : action.start
            })
        default: return state
    }
}

const defaultGrossState = {
    loading : true,
    list    : []
}

function grossList(state: any = defaultGrossState, action: Action) {
    switch (action.type) {
        case GROSS_LOADING:
            return Object.assign({}, state, { loading : true })
        case GROSS_LOADED:
            return Object.assign({}, state, {
                loading : false,
                list    : action.value
            })
        default: return state
    }
}

const rootReducers = combineReducers({
    keyWord,
    topList,
    grossList
})

export type AppState = ReturnType<typeof rootReducers>

export default  rootReducers