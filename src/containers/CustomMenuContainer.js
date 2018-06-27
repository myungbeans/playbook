import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { connect } from 'react-redux'
import { updateGridDimensions } from '../actions/settings-actions'
import { increaseGridIncrement } from '../actions/settings-actions'
import { decreaseGridIncrement } from '../actions/settings-actions'
import { bindActionCreators } from 'redux'

class CustomMenuContainer extends Component {
    increaseGridIncrement = () => {
        this.props.increaseGridIncrement(this.props.settings.interval + 5)
    }

    decreaseGridIncrement = () => {
        this.props.settings.interval <= 0 || this.props.decreaseGridIncrement(this.props.settings.interval - 5 )
    }

    render() {
        console.log("MENU PROPS", this.props)
        return (
            <div>
                <IconButton onClick={this.decreaseGridIncrement} color="default"><ExpandMore/></IconButton>
                Grid Interval: {this.props.settings.interval}
                <IconButton onClick={this.increaseGridIncrement} color="default"><ExpandLess/></IconButton>
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