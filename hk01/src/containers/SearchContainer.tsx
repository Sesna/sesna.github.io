import { connect } from 'react-redux'
import { changeKeyWord } from '../actions'
import SearchBox from '../components/SearchBox'

const mapStateToProps = (state: { keyWord: string }) => ({
    value : state.keyWord
})

const mapDispatchToProps = (dispatch: Function) => ({
    onChange : (value: string) => dispatch(changeKeyWord(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox)
