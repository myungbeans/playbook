import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//Actions
import { selectPlayer } from '../actions/playbook-actions'
//Components
import ButtonBase from '@material-ui/core/ButtonBase';
import { Typography } from '@material-ui/core/';
import { createAnimationTimeline } from './anime'

class AnimeControls extends Component {
    state = {
        progress: 0,
    }

    mapMoves = (callback) => {
        return Object.values(this.props.moves.points).map(callback)
    }

    matchIDtoMove = (id) => {
        return this.props.moves.points[id]
    }

    onPlay = () => {
        let points = [...document.querySelectorAll('.start-point')]
        let anime = createAnimationTimeline()

        points.forEach(point => {
            let move = this.matchIDtoMove(point.id)
            anime.add({
                targets: point,
                translateX: [ move.startX, move.endX],
                translateY: [ move.startY, move.endY],
                duration: (move.duration * 300),
                offset: 0
            })
        })

        return anime.play
    }

    onReset = () => {
        this.props.players.roster.selectedPlayer === "" ? this.props.selectPlayer(0) : this.props.selectPlayer("")
    }

    render(){
        return (
            <div style={{display: 'inline', paddingLeft:"455px"}}className="line player align-items">
                <ButtonBase onClick={this.onPlay} centerRipple focusRipple color="black" style={{height:"40px", width: "100px", paddingRight:"10px"}} className="play">
                    {/* <PlayArrow style={{color: "#99D3Df", height:"20px"}}></PlayArrow> */}
                    <Typography style={{color:"#black"}} variant="headline">PLAY</Typography>
                </ButtonBase>
                <ButtonBase onClick={this.onReset} centerRipple focusRipple color="black" style={{height:"40px", width: "100px", paddingLeft:"10px"}} className="reset">
                    {/* <Replay></Replay> */}
                    <Typography variant="headline">RESET</Typography>
                </ButtonBase>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        selectPlayer,
    }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(AnimeControls);