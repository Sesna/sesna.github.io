import React, { useState, createRef, RefObject } from 'react'
import { connect } from 'react-redux'
import { appendTopData } from '../actions'

interface Props {
    children   : any,
    appendData : Function
}

const Scrollable = (props: Props) => {
    let [lastScrollX, setScrollX] = useState(0)
    let ref: RefObject<HTMLDivElement> = createRef()
    const arriveBottom = (ele: HTMLDivElement): boolean => {
        let scrollTop: number    = ele.scrollTop
        let height: number       = ele.clientHeight
        let scrollHeight: number = ele.scrollHeight
        setScrollX(scrollTop)
        // 向上滚动的不用管
        if(lastScrollX > scrollTop) {
            return false
        }
        if(scrollHeight - height - scrollTop < 200) {
            return true
        }
        return false
    }
    const doScroll = () => {
        let ele: RefObject<HTMLDivElement> = ref
        if(!arriveBottom(ele.current)) {
            return
        }
        props.appendData()
    }
    return (<div className='content' ref={ref} onScroll={doScroll}>
        {props.children}
    </div>)
}

const mapDispatchToProps = (dispatch: Function) => ({
    appendData : () => dispatch(appendTopData())
})

export default connect(
    null,
    mapDispatchToProps
)(Scrollable)