import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from '@material-ui/lab/Slider'
import anime from 'animejs'

class AnimeControls extends Component {
    state = {
        progress: 0,
    }

    doSmth = () => {
        this.loop()
    }

    updateProgress = (e, value) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({progress: value})
    }

    mapMoves = (callback) => {
        return Object.values(this.props.moves.points).map(callback)
    }

    loop = () => {
        this.mapMoves(move => {
            this.playTimeLine.add({
                targets: `#startPoint-${move.id}`,
                translateX: move.endX - move.startX,
                translateY: move.endY - move.startY,
                duration: move.duration,
                offset: move.startDelay,
            })
        })
    }

    createAnimation = () => {
        return anime.timeline({
            easing: 'linear',
            direction: 'linear',
        });
    }

    onPlay = () => {
        let points = [...document.querySelectorAll('.start-point')]
        let anime = this.createAnimation()

        points.forEach(point => {
            let move = this.matchIDtoMove(point.id)
            console.log(move)
            anime.add({
                targets: point,
                translateX: [ move.startX, move.endX],
                translateY: [ move.startY, move.endY],
                duration: (move.duration * 300),
                offset: 0
            })
        })

        anime.play
    }

    matchIDtoMove = (id) => {
        return this.props.moves.points[id]
    }



    render(){
        return (
            <div className="line player align-items">
                <button onClick={this.onPlay} className="play">Play</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(AnimeControls);