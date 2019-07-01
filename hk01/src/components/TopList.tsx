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

interface Props {
    list       : App[],
    loading    : boolean,
    appending  : boolean
}

const TopList = (props: Props) => (
    <div className='top-list'>
        {props.loading ? <LoadingCircle/>
        : AppTopList(props.list)}
        {props.appending && <div className='loader'></div>}
    </div>
)

export default TopList