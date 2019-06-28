import { connect } from 'react-redux'
import GrossList from '../components/GrossList'
import { AppState } from '../reducers'
import { fliterData } from '../Util'

const mapStateToProps = (state: AppState) => ({
    loading : state.grossList.loading,
    list    : fliterData(state.grossList.list, state.keyWord),
})

export default connect(
    mapStateToProps,
)(GrossList)