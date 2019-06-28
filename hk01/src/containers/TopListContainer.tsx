import { connect } from 'react-redux'
import TopList from '../components/TopList'
import { AppState } from '../reducers'
import { fliterData } from '../Util'
import { appendTopData } from '../actions'

const mapStateToProps = (state: AppState) => ({
    keyWord   : state.keyWord,
    list      : fliterData(state.topList.list, state.keyWord),
    loading   : state.topList.loading,
    appending : state.topList.appending
})

const mapDispatchToProps = (dispatch: Function) => ({
    appendData : () => dispatch(appendTopData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopList)