// import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'

import React, { Component } from 'react'

import { Title } from '../assets/publicSplash'
import { createAnimationTimeline } from '../components/anime'

class Public extends Component {
    componentDidMount(){
        let anime = createAnimationTimeline()
        anime.add({
            targets: '.logo-shadow-fill',
            translateX: [-250, 0],
            easing: 'linear'
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