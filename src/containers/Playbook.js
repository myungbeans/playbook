import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { bindActionCreators } from 'redux' 

//DnD functionality
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd'

import PlaybookMenu from '../components/PlaybookMenu'
import GridContainer from './GridContainer'
import CustomMenuContainer from './CustomMenuContainer';

class Playbook extends Component {
    render() {
        return (
            <div id="playbook-page-container">
                <GridContainer/>
                <PlaybookMenu/>
                <CustomMenuContainer/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return state
}
  
export default withRouter(connect(mapStateToProps)(Playbook))

// export default DragDropContext(HTML5Backend)(withRouter(connect(mapStateToProps)(Playbook)));