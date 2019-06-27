import React from "react"
import SearchIcon from '../icons/search.svg'
interface BoxState { tip : boolean }

function SearchTip(tip: boolean) {
    if(tip) {
        return (
            <div className='tip common-position'>
                <img alt='search-icon' className='search-icon' src={SearchIcon} />
                <span>搜寻</span>
            </div>
        )
    }
}

export default class SearchBox extends React.Component {
    state: BoxState = { tip : true }
    props: { value : string, onChange : Function }
    constructor(props: object) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick  = this.handleClick.bind(this)
        this.handleTip    = this.handleTip.bind(this)
    }
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.handleTip()
        this.props.onChange(event.target.value)
    }
    handleClick() {
        this.setState({ tip : false })
    }
    handleTip() {
        if(!this.props.value) {
            this.setState({ tip : true })
        } else {
            this.setState({ tip : false })
        }
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
                onClick={this.handleClick}
                onBlur={this.handleTip}
            ></input>

        </div>)
    }
}