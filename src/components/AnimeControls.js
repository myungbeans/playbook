import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from '@material-ui/lab/Slider'
// import anime from 'animejs'

class AnimeControls extends Component {
    state = {
        progress: 0,
        // playTimeLine: anime.timeline({
        //     direction: 'alternate',
        //     loop: false,
        //     easing: 'linear',
        //     update: function(anim) {
        //         slider.value = anim.progress
        //     }
        // })
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

    render(){
        // {this.loop()}
        return (
            <div className="line player align-items">
                <button onClick={this.doSmth.play} className="play">Play</button>
                <button onClick={this.doSmth.pause} className="pause">Pause</button>
                <button onClick={this.doSmth.restart} className="restart">Restart</button>
                <Slider className="progress" onChange={(e,value)=>this.updateProgress(e,value)} step={1} type="range" value={this.state.progress}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(AnimeControls);