import React from 'react'
import './App.sass'
import SearchBox from './components/SearchBox'
import GrossList from './components/GrossList'
import TopList from './components/TopList'


export default class App extends React.Component {
    state: { keyWord : string } = { keyWord : '' }
    constructor(props: object) {
        super(props)
        this.handleKeyWordChange = this.handleKeyWordChange.bind(this)
    }
    handleKeyWordChange(value) {
        this.setState({ keyWord : value })
    }
    render() {
        return (
            <div id="app">
                <SearchBox
                    value={this.state.keyWord}
                    onChange={this.handleKeyWordChange}
                />
                <div className='content' id='scrollable-content'>
                    <GrossList keyWord={this.state.keyWord} />
                    <TopList keyWord={this.state.keyWord} />
                </div>
            </div>
        )

    }
}
