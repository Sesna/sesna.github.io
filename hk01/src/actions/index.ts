import { App } from '../DataStruct'
import { getTopN, getTopGrossingN } from '../api/GetApp'
import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducers'
import { Action as ActionR } from 'redux'

export const KEY_WORD: string      = 'keyWord'
export const TOP_LOADING: string   = 'topLoading'
export const TOP_LOADED: string    = 'topLoaded'
export const TOP_APPENDING: string = 'topAppendeding'
export const TOP_APPENDED: string  = 'topAppendeded'
export const GROSS_LOADING: string = 'grossLoading'
export const GROSS_LOADED: string  = 'grossLoaded'

export interface Action {
    type               : string,
    value?             : any,
    [propName: string] : any
}

export const CONSTANTS = {
    KEY_WORD,
    TOP_LOADING,
    TOP_LOADED,
    TOP_APPENDING,
    TOP_APPENDED,
    GROSS_LOADING,
    GROSS_LOADED
}

export function changeKeyWord(value: string): Action {
    return { type : KEY_WORD, value }
}

export function setTopLoading(): Action {
    return { type : TOP_LOADING }
}

export function setTopLoaded(value: App[], start: number): Action {
    return { type : TOP_LOADED, value, start }
}

export function setTopAppending(): Action {
    return { type : TOP_APPENDING }
}

export function setTopAppended(value: App[], start: number): Action {
    return { type : TOP_APPENDED, value, start }
}

export function setGrossLoading(): Action {
    return { type : GROSS_LOADING }
}

export function setGrossLoaded(value: App[]): Action {
    return { type : GROSS_LOADED, value }
}

export function getTopData(): ThunkAction<void, AppState, null, ActionR<string>> {
    return async function(dispatch: Dispatch<Action>, getState: Function) {
        let state = getState().topList
        dispatch(setTopLoading())
        let data = await getTopN(state.start, state.limit)
        dispatch(setTopLoaded(data, state.start + state.limit))
    }
}

export function appendTopData(): ThunkAction<void, AppState, null, ActionR<string>> {
    return async function(dispatch: Dispatch<Action>, getState: Function) {
        let state = getState().topList
        if(state.appending || state.start >= 100) {
            return
        }
        dispatch(setTopAppending())
        let data = await getTopN(state.start, state.limit)
        dispatch(setTopAppended(data, state.start + state.limit))
    }
}

export function getGrossData(): ThunkAction<void, AppState, null, ActionR<string>> {
    return async function(dispatch: Dispatch<Action>) {
        dispatch(setGrossLoading())
        let data = await getTopGrossingN()
        dispatch(setGrossLoaded(data))
    }
}