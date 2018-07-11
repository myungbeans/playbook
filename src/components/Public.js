// import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

import React, { Component } from 'react'

import { Title } from '../assets/publicSplash'
import { homepageAnimationTimeline } from '../components/anime'

class Public extends Component {
    componentDidMount(){
        // let anime = homepageAnimationTimeline()
        // anime
        // .add({
        //     targets: '.logo-shadow-fill',
        //     translateX: [-250, 0],
        //     easing: 'linear',
        //     opacity: 1,
        // })
        this.mountAnimation()
    }

    componentDidUpdate(){
        console.log("Update")
        this.mountAnimation()
    }

    mountAnimation = () => {
        let anime = homepageAnimationTimeline()
        anime
        .add({
            targets: '.logo-shadow-fill',
            translateX: [-250, 0],
            easing: 'linear',
            opacity: 1,
            delay: 1000
        })
    }

    render() {
        return (
            <Title/>
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