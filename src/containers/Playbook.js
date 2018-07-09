import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux' 

//Actions
import { setPlayers } from '../actions/playbook-actions'
import { toggleLoading } from '../actions/settings-actions'
import { setCurrentMove, storePoints } from '../actions/move-actions'
//Containers
import PlaybookMenu from '../components/PlaybookMenu'
import GridContainer from './GridContainer'
import CustomMenuContainer from './CustomMenuContainer';
//Components

//Fetch Calls
// import { persistEndCoords } from '../APICalls'

class Playbook extends Component {
    componentDidMount(){
        this.props.toggleLoading(this.props.settings.loading, true)
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
            this.props.setCurrentMove({...roster})
            this.props.setPlayers(roster)
            this.setPoints(this.props.players.roster, this.props.moves.moveIndex)
        })
        .then(()=> this.props.toggleLoading(this.props.settings.loading, false))
    }

    setPoints = (players, moveIndex) => {
        let points = {}
        Object.values(players).forEach(player => {
            if (player.moves[0] && player.moves.length - 1 === moveIndex) {
                let move = player.moves[moveIndex]
                points[move.id] = move
            }
        })
        this.props.storePoints(points)
    }

    render() {
        return (
            <div id="playbook-page-container">
                {this.props.settings.loading ? null : <GridContainer/>}
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
        setPlayers, setCurrentMove, storePoints, toggleLoading
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Playbook))