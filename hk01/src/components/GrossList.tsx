import React from 'react'
import { App } from '../DataStruct'
import LoadingBar from './LoadingBar'
import { imgStyle } from '../Util'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function AppGross(props: App) {
    return (
        <CSSTransition  timeout={300} className='app' key={props.name}>
            <div>
                <div className='icon' style={imgStyle(props.icon)}></div>
                <p className='name'>{props.name}</p>
                <p className='category'>{props.category}</p>
            </div>
        </CSSTransition>
    )
}

function AppGrossList(list: App[]) {
    return (
        <TransitionGroup component={null} appear={true}>
            {list.map((item) => AppGross(item))}
        </TransitionGroup>
    )
}

interface Props {
    loading : boolean,
    list    : App[]
}

const GrossList = (props: Props) => (
    <div className='gross-list'>
        <h6 className='title'>推介</h6>
        <div className='app-list'>
            {props.loading ? <LoadingBar />
            : AppGrossList(props.list) }
        </div>
    </div>
)

export default GrossList