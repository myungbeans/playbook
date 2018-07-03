import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux' 
import { setPlayers } from '../actions/playbookMenu-actions'
//DnD functionality
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd'

import PlaybookMenu from '../components/PlaybookMenu'
import GridContainer from './GridContainer'
import CustomMenuContainer from './CustomMenuContainer';

class Playbook extends Component {
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/plays/${localStorage.getItem("selectedPlay")}/players`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {this.props.setPlayers(data)})
    }
    
    
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

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        setPlayers
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Playbook))

// export default DragDropContext(HTML5Backend)(withRouter(connect(mapStateToProps)(Playbook)));