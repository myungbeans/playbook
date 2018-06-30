import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { bindActionCreators } from 'redux' 

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
  
export default withRouter(connect(mapStateToProps)(Playbook));