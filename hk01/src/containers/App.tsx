import React from 'react'
import '../styles/App.sass'
import SearchContainer from './SearchContainer'
import ScrollableContainer from './ScrollableContainer'
import GrossListContainer from './GrossListContainer'
import TopListContainer from './TopListContainer'

const App = () => (
    <div id="app">
        <SearchContainer />
        <ScrollableContainer>
            <GrossListContainer />
            <TopListContainer />
        </ScrollableContainer>
    </div>
)

export default App
