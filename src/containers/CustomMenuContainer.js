import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { connect } from 'react-redux'
import { updateGridSettings } from '../actions/settings-actions'
import { bindActionCreators } from 'redux'

class CustomMenuContainer extends Component {
    increaseGridIncrement = () => {
        this.props.updateGridSettings({ interval: this.props.settings.interval + 5 })
    }

    decreaseGridIncrement = () => {
        this.props.settings.interval <= 0 || this.props.updateGridSettings({ interval: this.props.settings.interval - 5})
    }

    render() {
        return (
            <div>
                <IconButton onClick={this.decreaseGridIncrement} color="default"><ExpandMore/></IconButton>
                Grid Increment: {this.props.settings.interval}
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
        updateGridSettings
    }, dispatch)
}
  
export default connect(mapStateToProps, mapActionsToProps)(CustomMenuContainer);