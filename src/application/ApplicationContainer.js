import { connect } from 'react-redux'
import {
    selectNode,
    addNode,
    removeNode,
} from './appActions'
import Application from './Application'

const mapStateToProps = state => ({
    selectedJob: state.app.selectedJob,
    jobTree: state.app.jobTree,
    detail: state.app.detail,
});

const mapDispatchToProps = dispatch => ({
    selectNode: node => dispatch(selectNode(node)),
    removeHandler: node => dispatch(removeNode(node)),
    addHandler: node => dispatch(addNode(node)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Application)