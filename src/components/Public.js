import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

//Components
import { Title } from '../assets/publicSplash'
import Typography from '@material-ui/core/Typography';
import { createAnimationTimeline } from '../components/anime'
import emptyCircle from '../assets/PlayerTokens/emptyCircle.png'
import groupedCircle from '../assets/PlayerTokens/groupedCircle.png'
import selectedCircle from '../assets/PlayerTokens/selectedCircle.png'
import dashCircle from '../assets/PlayerTokens/dashCircle2.png'
import clipboard from '../assets/loginIcons/clipboard.png'
import whistle from '../assets/loginIcons/whistle.png'
import ButtonBase from '@material-ui/core/ButtonBase';

class Public extends Component {

    componentDidMount(){
        let anime = createAnimationTimeline()
        anime.add({
            targets: '#Playbook-Logo',
            scale: {value: 0, duration: 0, easing: 'easeInOutExpo'},
            easing: 'easeInOutBack',
        }).add({
            targets: '.ButtonAppBar-root-1',
            transformY: -50,
            duration: 1
        }).add({
            offset: 4800,
            targets: '#Playbook-Logo',
            scale: {value: 0.8, duration: 3500, easing: 'easeInOutExpo'},
        }).add({
            targets: '#Playbook-Logo',
            scale: {value: 0.8, duration: 30000, easing: 'easeInOutExpo'},
        }).add({
            offset: "-=31000",
            targets: '.logo-shadow-fill',
            scale: {value: 1, duration: 2000, easing: 'easeInOutExpo'},
            translateX: [-250, 0],
            easing: 'linear'
        })

        let login = createAnimationTimeline()
        login.add({
            targets: [`#nowhistle`, `#clipboard`],
            scale: {value: 0, duration: 0, easing: 'easeInOutExpo'},
            easing: 'easeInOutBack',
        }).add({
            targets: [`#nowhistle`, `#clipboard`],
            translateY: [{value: 3, duration: 0, easing: "easeInOutQuint"}]
        }).add({
            offset: 8000,
            targets: [`#nowhistle`, `#clipboard`],
            scale: { value: 100, duration: 0},
            translateY: [{value: 1, duration: 1200, easing: "easeInOutQuint"}],
        })

        let textMsg = createAnimationTimeline()
        textMsg.add({
            targets: [`#login-text`, `#signup-text`],
            scale: {value: 0, duraiton: 0},
            translateY: [{value: 1000, duration: 0}]
        }).add({
            offset: 8000,
            targets: [`#login-text`, `#signup-text`],
            scale:{ value: 1, duration: 0},
            translateY: [{value: [1000, 0], duration: 1200, easing: "easeInOutQuint"}]
        })

        let circles = createAnimationTimeline()
        circles.add({
            delay: 1000,
            targets: '#intro-circle-1',
            scale: {value: 100, duration: 1000, easing: 'easeInOutExpo'},
        }).add({
            targets: '#intro-circle-2',
            scale: {value: 100, duration: 1000, easing: 'easeInOutExpo'},
            offset: '-= 800'
        }).add({
            targets: '#intro-circle-3',
            scale: {value: 100, duration: 1000, easing: 'easeInOutExpo'},
            offset: '-= 800'
        }).add({
            targets: '#intro-circle-4',
            scale: {value: 100, duration: 1000, easing: 'easeInOutExpo'},
            offset: '-= 800'
        })
        .add({
            targets: '#intro-circle-1',
            scale: {value: 100},
            translateX: [{value: 3.2, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 1.6, duration: 800, easing: "easeInOutQuint"}, {value: -6, duration: 800, easing: "easeInOutQuint"}],
            translateY: [{value: 2.55, duration: 800, easing: "easeInOutQuint"}, {value: 2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -0.8, duration: 800, easing: "easeInOutQuint"}],
            duration: 3000
        }).add({
            targets: '#intro-circle-2',
            scale: {value: 100},
            translateX: [{value: -3.2, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -3.2, duration: 800, easing: "easeInOutQuint"}, {value: -1.6, duration: 800, easing: "easeInOutQuint"}, {value: 6, duration: 800, easing: "easeInOutQuint"}],
            translateY: [{value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 2.55, duration: 800, easing: "easeInOutQuint"}, {value: 2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -0.8, duration: 800, easing: "easeInOutQuint"}],
            duration: 3000,
            offset: '-=4000'
        }).add({
            targets: '#intro-circle-3',
            scale: {value: 100},
            translateX: [{value: 3.2, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 3.2, duration: 800, easing: "easeInOutQuint"}, {value: 1.6, duration: 800, easing: "easeInOutQuint"}, {value: -6, duration: 800, easing: "easeInOutQuint"}],
            translateY: [{value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0.8, duration: 800, easing: "easeInOutQuint"}],
            duration: 3000,
            offset: '-=4000'
        }).add({
            targets: '#intro-circle-4',
            scale: {value: 100},
            translateX: [{value: -3.2, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -1.6, duration: 800, easing: "easeInOutQuint"}, {value: 6, duration: 800, easing: "easeInOutQuint"}],
            translateY: [{value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0, duration: 800, easing: "easeInOutQuint"}, {value: -2.55, duration: 800, easing: "easeInOutQuint"}, {value: 0.8, duration: 800, easing: "easeInOutQuint"}],
            duration: 3000,
            offset: '-=4000'
        })
    }

    circleStyle = {
        backgroundColor: "transparent",
        height: "0.5px",
        width: "0.5px",
        position: "absolute"
    }
    whistleStyle = {
        backgroundColor: "transparent",
        height: "0.5px",
        width: "0.5px",
        position: "absolute"
    }

    stopAnimation = (e) => {
        console.log("clicked")
        this.forceUpdate()
    }

    login = () => {
        this.props.history.push('/login')
    }

    signup = () => {
        this.props.history.push('/new_account')
    }

    render() {
        console.log(this.props)
        return (
        <div>
            <Title/>
            <img id="intro-circle-1" src={emptyCircle} style={{...this.circleStyle, left: "35%", top: "30%"}} alt="circle"/>
            <img id="intro-circle-2" src={groupedCircle} style={{...this.circleStyle, left: "60%", top: "30%"}} alt="circle"/>
            <img id="intro-circle-3" src={selectedCircle} style={{...this.circleStyle, left: "35%", top: "70%"}} alt="circle"/>
            <img id="intro-circle-4" src={dashCircle} style={{...this.circleStyle, left: "60%", top: "70%"}} alt="circle"/>
            
            <ButtonBase style={{position: "absolute", left:"36%", top:"45%"}}>
                <img id="nowhistle" src={whistle} onClick={this.login} style={{...this.whistleStyle, left: "35%"}} alt="circle"/>
            </ButtonBase>
            <ButtonBase onMouseEnter={this.handleHover} onMouseLeave={this.handleExit} style={{position: "absolute", left: "60%", top: "45%"}}>
                <img id="clipboard" src={clipboard} onClick={this.signup} style={{...this.circleStyle, left: "60%"}} alt="circle"/>
            </ButtonBase>
            <Typography id={"login-text"} onClick={this.login} style={{position: "absolute", left: "35.5%", bottom: "21%", color:"#000"}} variant="title" > LOGIN </Typography>
            <Typography id={"signup-text"} onClick={this.signup} style={{position: "absolute", left: "58.5%", bottom: "21%", color:"#000"}} variant="title"> SIGN-UP </Typography>
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