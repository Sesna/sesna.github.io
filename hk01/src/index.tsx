import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { createStore, applyMiddleware, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as serviceWorker from './serviceWorker'
import './styles/index.sass'
import reducer, { AppState } from './reducers'
import App from './containers/App'
import { getTopData, getGrossData } from './actions'

const store = createStore(reducer, composeWithDevTools(
        applyMiddleware(thunk  as ThunkMiddleware<AppState, AnyAction>)
    )
)

store.dispatch(getTopData())
store.dispatch(getGrossData())


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
