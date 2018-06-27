import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'

import { connect } from 'react-redux'
import { updateGridSettings } from '../actions/settings-actions'
import { bindActionCreators } from 'redux'

class CustomMenuContainer extends Component {
    localState = {
        error: false,
        label: "Graph Interval"
    }

    onGridSettingsChange = (event) => {
        if (!parseInt(event.target.value)) {
            this.setState({error: true, label: "Input must be an Integer"})
        } else {
            this.setState({errorText: '', label: "Graph Interval"})
            console.log(event.target)
            const interval = event.target.value
            this.props.updateGridSettings({ interval })
        }
    }

    render() {
        return (
            <TextField onChange={this.onGridSettingsChange} name="interval" id="interval" label={this.localState.label} error={this.localState.error} value={this.props.interval} />
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