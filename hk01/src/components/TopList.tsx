import React from 'react'
import LoadingCircle from './LoadingCircle'
import { App } from '../DataStruct'
import { ReactComponent as Star1 } from '../icons/star_01.svg'
import { ReactComponent as Star2 } from '../icons/star_02.svg'
import { imgStyle } from '../Util'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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

function AppTop(props: App, i: number) {
    let cname = 'app' + (i % 2 === 1 ? " circle" : "")
    return (
        <CSSTransition timeout={300} className={cname} key={props.name}>
            <div>
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
            </div>
        </CSSTransition>
    )
}

function AppTopList(list: App[]) {
    return (
        <TransitionGroup component={null} appear={true}>
            {list.map((item, i) => AppTop(item, i))}
        </TransitionGroup>
    )
}

interface State {
    lastScroll : number
}

interface Props {
    list       : App[],
    loading    : boolean,
    appending  : boolean,
    appendData : Function
}

export default class TopList extends React.Component {
    props: Props
    state: State = {
        lastScroll : 0
    }

    constructor(props: object) {
        super(props)
        this.onScroll = this.onScroll.bind(this)
    }

    componentDidMount() {
        let ele = document.querySelector('#scrollable-content')
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
        if(!this.arriveBottom(ele)) {
            return
        }
        this.props.appendData()
    }

    render() {
        return (
            <div className='top-list'>
                {this.props.loading ? <LoadingCircle/>
                : AppTopList(this.props.list)}
                {this.props.appending && <div className='loader'></div>}
            </div>
        )
    }
}