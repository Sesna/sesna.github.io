import { connect } from 'react-redux'
import GrossList from '../components/GrossList'

const mapStateToProps = (state: { keyWord: string }) => ({
    keyWord : state.keyWord
})

export default connect(
    mapStateToProps,
)(GrossList)