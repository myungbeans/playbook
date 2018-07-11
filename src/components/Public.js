// import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

import React, { Component } from 'react'

import { Title } from '../assets/publicSplash'
import { createAnimationTimeline } from '../components/anime'
import emptyCircle from '../assets/PlayerTokens/emptyCircle.png'
import groupedCircle from '../assets/PlayerTokens/groupedCircle.png'
import selectedCircle from '../assets/PlayerTokens/selectedCircle.png'
import dashCircle from '../assets/PlayerTokens/dashCircle2.png'

class Public extends Component {
    componentDidMount(){
        let anime = createAnimationTimeline()
        anime.add({
            targets: '#Playbook-Logo',
            scale: {value: 0, duration: 0, easing: 'easeInOutExpo'},
            easing: 'easeInOutBack',
        }).add({
            offset: 5000,
            targets: '#Playbook-Logo',
            scale: {value: 1, duration: 2500, easing: 'easeInOutExpo'},
            easing: 'linear'
        }).add({
            targets: '#Playbook-Logo',
            scale: {value: 1, duration: 30000, easing: 'easeInOutExpo'},
        }).add({
            offset: "-=31000",
            targets: '.logo-shadow-fill',
            scale: {value: 1, duration: 2000, easing: 'easeInOutExpo'},
            translateX: [-250, 0],
            easing: 'linear'
        })

        let circles = createAnimationTimeline()
        circles.add({
            delay: 1000,
            targets: '#intro-circle-1',
            scale: {value: 150, duration: 1000, easing: 'easeInOutExpo'},
        }).add({
            targets: '#intro-circle-2',
            scale: {value: 150, duration: 1000, easing: 'easeInOutExpo'},
            offset: '-= 800'
        }).add({
            targets: '#intro-circle-3',
            scale: {value: 150, duration: 1000, easing: 'easeInOutExpo'},
            offset: '-= 800'
        }).add({
            targets: '#intro-circle-4',
            scale: {value: 150, duration: 1000, easing: 'easeInOutExpo'},
            offset: '-= 800'
        })
        .add({
            targets: '#intro-circle-1',
            scale: {value: 150},
            translateX: [{value: 3.2, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 1.6, duration: 800, easing: "easeInOutQuint"}, {value: -6, duration: 800, easing: "easeInOutQuint"}],
            translateY: [{value: 2.55, duration: 800, easing: "easeInOutQuint"}, {value: 2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -0.8, duration: 800, easing: "easeInOutQuint"}],
            duration: 3000
        }).add({
            targets: '#intro-circle-2',
            scale: {value: 150},
            translateX: [{value: -3.2, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -3.2, duration: 800, easing: "easeInOutQuint"}, {value: -1.6, duration: 800, easing: "easeInOutQuint"}, {value: 6, duration: 800, easing: "easeInOutQuint"}],
            translateY: [{value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 2.55, duration: 800, easing: "easeInOutQuint"}, {value: 2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -0.8, duration: 800, easing: "easeInOutQuint"}],
            duration: 3000,
            offset: '-=4000'
        }).add({
            targets: '#intro-circle-3',
            scale: {value: 150},
            translateX: [{value: 3.2, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 3.2, duration: 800, easing: "easeInOutQuint"}, {value: 1.6, duration: 800, easing: "easeInOutQuint"}, {value: -6, duration: 800, easing: "easeInOutQuint"}],
            translateY: [{value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0.8, duration: 800, easing: "easeInOutQuint"}],
            duration: 3000,
            offset: '-=4000'
        }).add({
            targets: '#intro-circle-4',
            scale: {value: 150},
            translateX: [{value: -3.2, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -1.6, duration: 800, easing: "easeInOutQuint"}, {value: 6, duration: 800, easing: "easeInOutQuint"}],
            translateY: [{value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0.8, duration: 800, easing: "easeInOutQuint"}],
            duration: 3000,
            offset: '-=4000'
        }).add({

        })
    }
    //translateX: [0, 700],
    // translateY: [0, 100],
    // easing: 'easeInOutQuint',
    // duration: 1000,
    // delay: 1000

    circleStyle = {
        backgroundColor: "transparent",
        height: "0.5px",
        width: "0.5px",
        position: "absolute"
    }

    render() {
        return (
        <div>
            <Title/>
            <img id="intro-circle-1" src={emptyCircle} style={{...this.circleStyle, left: "35%", top: "20%"}} alt="circle"/>
            <img id="intro-circle-2" src={groupedCircle} style={{...this.circleStyle, left: "60%", top: "20%"}} alt="circle"/>
            <img id="intro-circle-3" src={selectedCircle} style={{...this.circleStyle, left: "35%", top: "60%"}} alt="circle"/>
            <img id="intro-circle-4" src={dashCircle} style={{...this.circleStyle, left: "60%", top: "60%"}} alt="circle"/>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        ...routeActions
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Public));