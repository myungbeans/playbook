import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux' 

//Actions
import { setPlayers } from '../actions/playbook-actions'
import { setCurrentMove, storeEndPoints } from '../actions/move-actions'
//Containers
import PlaybookMenu from '../components/PlaybookMenu'
import GridContainer from './GridContainer'
import CustomMenuContainer from './CustomMenuContainer';
//Components


class Playbook extends Component {
    componentDidMount(){
        this.setUp()
    }
    
    setUp = () => {
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
        .then(()=> this.props.setCurrentMove(this.props.players.roster))
        .then(()=> this.setEndPoints(this.props.players.roster, this.props.moves.moveIndex))
    }

    setEndPoints = (players, moveIndex) => {
        let endPoints = []
        Object.values(players).forEach(player => {
            if (player.moves[0] && player.moves.length - 1 === moveIndex) {
                let move = player.moves[moveIndex]
                endPoints.push(move)
                this.updateCoordsIfNeeded(player, move, this.props)
            }
        })
        this.props.storeEndPoints(endPoints)
    }

    updateCoordsIfNeeded = (player, move, props) => {
        if (player.x !== move.startX || player.y !== move.startY) {
            fetch(`http://localhost:3000/api/v1/moves/${move.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ startX: props.players.roster[player.id].x, startY: props.players.roster[player.id].y ,endX:move.endX, endY:move.endY })
            })
        }
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
        setPlayers, setCurrentMove, storeEndPoints
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Playbook))