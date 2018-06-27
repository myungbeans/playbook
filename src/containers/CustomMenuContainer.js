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
    // localState = {
    //     error: false,
    //     label: "Graph Interval"
    // }

    onGridSettingsChange = (event) => {
        this.setState({errorText: '', label: "Graph Interval"})
        console.log(event.target)
        const interval = event.target.value
        this.props.updateGridSettings({ interval })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {/* <TextField onChange={this.onGridSettingsChange} name="interval" id="interval" label={this.localState.label} error={this.localState.error} value={this.props.interval} /> */}
                <IconButton color="default"><ExpandLess/></IconButton>
                {this.props.settings.interval}
                <IconButton color="default"><ExpandMore/></IconButton>
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