import React from "react"
import LoadingCircle from './LoadingCircle'
import { App } from '../DataStruct'
import { getTopN } from '../api/GetApp'
import { ReactComponent as Star1 } from '../icons/star_01.svg'
import { ReactComponent as Star2 } from '../icons/star_02.svg'
import { imgStyle } from '../Util'
import { fliterData } from '../Util'


interface StateTopList {
    loading    : boolean,
    appending  : boolean,
    start      : number,
    limit      : number,
    lastScroll : number,
    list       : App[]
}

function showStar(starNumber: number) {
    let t = []
    for(let i = 0; i < starNumber; i++) {
        t.push(<Star2 className='rate-star' key={i}></Star2>)
    }
    for(let i = starNumber; i < 5; i++) {
        t.push(<Star1 className='rate-star' key={starNumber + i}></Star1>)
    }
    return t
}

function AppTop(props: App) {
    return (<div className='app' key={props.name}>
        <div className='left'>{props.rank}</div>
        <div className='middle'>
            <div className='icon' style={imgStyle(props.icon)}></div>
        </div>
        <div className='right'>
            <p className='name'>{props.name}</p>
            <p className='category'>{props.category}</p>
            <div className='like'>
                {showStar(props.star)}
                <span className='comment'>({props.comment})</span>
            </div>
        </div>
    </div>)
}

function AppTopList(list: App[]) {
    return list.map((item) => AppTop(item))
}

export default class TopList extends React.Component {
    props: { keyWord : string }
    state: StateTopList = {
        loading    : true,
        list       : [],
        start      : 0,
        limit      : 10,
        lastScroll : 0,
        appending  : false
    }

    constructor(props: object) {
        super(props)
        this.onScroll = this.onScroll.bind(this)
    }

    async componentDidMount() {
        let ele = document.querySelector('#scrollable-content')
        let data: App[] = await getTopN(this.state.start, this.state.limit)
        this.setState({
            list    : data,
            loading : false,
            start   : this.state.start + this.state.limit
        })
        ele.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        let ele = document.querySelector('#scrollable-content')
        ele.removeEventListener('scroll', this.onScroll);
    }

    arriveBottom(ele: Element): boolean {
        let scrollTop: number    = ele.scrollTop
        let height: number       = ele.clientHeight
        let scrollHeight: number = ele.scrollHeight
        let lastScroll: number   = this.state.lastScroll
        // console.log('s', ele, scrollHeight - height - scrollTop)
        this.setState({ lastScroll : scrollTop })
        // 向上滚动的不用管
        if(lastScroll > scrollTop) {
            return false
        }
        if(scrollHeight - height - scrollTop < 200) {
            return true
        }
        return false
    }

    onScroll() {
        let ele: Element = document.querySelector('#scrollable-content')
        if(!this.arriveBottom(ele) || this.state.appending) {
            return
        }
        if(this.state.start > 90) {
            return
        }
        this.setState({ appending : true }, async () => {
            let data: App[] = await getTopN(this.state.start, this.state.limit)
            this.setState({
                list      : [...this.state.list, ...data],
                appending : false,
                start     : this.state.start + this.state.limit
            })
        })
    }

    render() {
        return (
            <div className='top-list'>
                {this.state.loading ? <LoadingCircle/>
                : AppTopList(fliterData(this.state.list, this.props.keyWord))}
                {this.state.appending && <div className='loader'></div>}
            </div>
        )
    }
}