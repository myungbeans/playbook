import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createAnimationTimeline } from './anime'

//Actions
import { selectPlayer } from '../actions/playbook-actions'

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
            <div className="line player align-items">
                <button onClick={this.onPlay} className="play">Play</button>
                <button onClick={this.onReset} className="reset">Reset</button>
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