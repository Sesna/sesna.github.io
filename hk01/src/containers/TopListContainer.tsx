import { connect } from 'react-redux'
import TopList from '../components/TopList'

const mapStateToProps = (state: { keyWord: string }) => ({
    keyWord : state.keyWord
})

export default connect(
    mapStateToProps,
)(TopList)