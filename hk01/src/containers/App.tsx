import React from 'react'
import '../styles/App.sass'
import SearchContainer from './SearchContainer'
import GrossListContainer from './GrossListContainer'
import TopListContainer from './TopListContainer'

const App = () => (
    <div id="app">
        <SearchContainer />
        <div className='content' id='scrollable-content'>
            <GrossListContainer />
            <TopListContainer />
        </div>
    </div>
)

export default App
