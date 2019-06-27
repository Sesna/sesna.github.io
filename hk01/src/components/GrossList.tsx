import React from "react"
import { getTopGrossingN } from '../api/GetApp'
import { App } from '../DataStruct'
import LoadingBar from './LoadingBar'
import { fliterData } from '../Util'

const imgStyle = (url: string) => ({
    backgroundImage : 'url(' + url + ')'
})

function AppGross(props: App) {
    return (<div className='app' key={props.name}>
        <div className='icon' style={imgStyle(props.icon)}></div>
        <p className='name'>{props.name}</p>
        <p className='category'>{props.category}</p>
    </div>)
}

function AppGrossList(list: App[]) {
    return list.map((item) => AppGross(item))
}

interface StateGrossList {
    loading : boolean,
    list : App[]
}

export default class GrossList extends React.Component {
    props: { keyWord : string }
    state: StateGrossList = {
        loading : true,
        list : []
    }
    async componentDidMount() {
        let data: App[] = await getTopGrossingN(10)
        this.setState({list : data, loading : false })
    }
    render() {
        return (<div className='gross-list'>
            <h6 className='title'>推介</h6>
            <div className='app-list'>
                {this.state.loading ? <LoadingBar />
                : AppGrossList(fliterData(this.state.list, this.props.keyWord)) }
            </div>
        </div>)
    }
}