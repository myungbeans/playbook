import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//Assets
import IconButton from '@material-ui/core/IconButton';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
//Actions
import { updateGridDimensions } from '../actions/settings-actions'
import { increaseGridIncrement } from '../actions/settings-actions'
import { decreaseGridIncrement } from '../actions/settings-actions'
//Components
import AnimeControls from '../components/AnimeControls'

class CustomMenuContainer extends Component {
    increaseGridIncrement = () => {
        this.props.increaseGridIncrement(this.props.settings.interval + 5)
    }

    decreaseGridIncrement = () => {
        this.props.settings.interval <= 0 || this.props.decreaseGridIncrement(this.props.settings.interval - 5 )
    }

    render() {
        return (
            <div id="Customization-Menu-Container">
                <IconButton onClick={this.decreaseGridIncrement} color="default"><ExpandMore/></IconButton>
                Grid Interval: {this.props.settings.interval}
                <IconButton onClick={this.increaseGridIncrement} color="default"><ExpandLess/></IconButton>
                <br/>
                <p>Player: {this.props.players.selectedPlayer}</p>
                <br/>
                <AnimeControls/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        updateGridDimensions, increaseGridIncrement, decreaseGridIncrement
    }, dispatch)
}
  
export default connect(mapStateToProps, mapActionsToProps)(CustomMenuContainer);