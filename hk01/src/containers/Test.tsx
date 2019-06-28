import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { AppState } from '../reducers'
import './test.css'

const mapStateToProps = (state: AppState) => ({
    value : state.keyWord
})

let data = [
    'asdfadg',
    'asdfajmndg',
    'asdfadvcbg',
    'asdfreyadg',
    'asdfadasdfg',
    'asdfadg123'
]
class Test extends React.Component {
    props: { value : string }
    state = { show : false, data }
    constructor(props) {
        super(props)
        console.log(props)
        this.setShow = this.setShow.bind(this)
    }
    setShow() {
        // this.setState({ data : this.state.data.concat('oooookkkk' + i++) })
        this.setState({ data : data.reverse()})
    }
    componentDidMount() {
        this.setShow()
        this.setShow()
        this.setShow()
    }
    render() {
        let v = this.props.value
        let d = this.state.data.filter(txt => txt.indexOf(v) > -1)
        return (
            <div>
                <TransitionGroup>
                    {d.map((txt, i) => (
                        <CSSTransition key={i}
                            in={this.state.show}
                            timeout={300}
                            classNames="alert"
                            unmountOnExit
                        >
                            <p>{txt}</p>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                <button onClick={this.setShow}>toggle</button>
            </div>
        ) 
    }
}

export default connect(mapStateToProps)(Test)