import React from "react"
import SearchIcon from '../icons/search.svg'

interface State {
    tip : boolean
}

interface Props {
    value    : string,
    onChange : Function
}

function SearchTip(tip: boolean) {
    if(!tip) { return }
    return (
        <div className='tip common-position'>
            <img alt='search-icon' className='search-icon' src={SearchIcon} />
            <span>搜寻</span>
        </div>
    )
}

export default class SearchBox extends React.Component {
    state: State = { tip : true }
    props: Props
    
    constructor(props: object) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.onChange(event.target.value)
        this.handleTip(event.target.value)
    }
    
    handleTip(value: string) {
        this.setState({ tip : value ? false : true })
    }
    
    render() {
        return(<div className='search-box'>
            <div className='background common-position'></div>
            {SearchTip(this.state.tip)}
            <input
                className='search common-position'
                type='text'
                maxLength={20}
                value={this.props.value}
                onChange={this.handleChange}
            ></input>

        </div>)
    }
}