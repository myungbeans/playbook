import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux' 
import { setPlayers } from '../actions/playbook-actions'
//DnD functionality
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd'

import PlaybookMenu from '../components/PlaybookMenu'
import GridContainer from './GridContainer'
import CustomMenuContainer from './CustomMenuContainer';

class Playbook extends Component {
    componentDidMount(){
        this.fetchPlayers()
        this.fetchMoves()
    }
    
    fetchPlayers = () => {
        fetch(`http://localhost:3000/api/v1/plays/${localStorage.getItem("selectedPlay")}/players`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {
            let roster = {}
            data.forEach(player => roster[player.id] = player)
            this.props.setPlayers(roster)
        })
    }

    fetchMoves = (player_id) => {
        fetch(`http://localhost:3000/api/v1/players/${player_id}/moves`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("fetched moves", data)
            // let roster = {}
            // data.forEach(player => roster[player.id] = player)
            // this.props.setPlayers(roster)
        })
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