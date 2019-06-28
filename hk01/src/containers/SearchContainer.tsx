import { connect } from 'react-redux'
import { changeKeyWord } from '../actions'
import SearchBox from '../components/SearchBox'
import { Dispatch } from 'redux'
import { AppState } from '../reducers'

const mapStateToProps = (state: AppState) => ({
    value : state.keyWord
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onChange : (value: string) => dispatch(changeKeyWord(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox)
