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
import { handleError } from '../actions/settings-actions'
//Components
import AnimeControls from '../components/AnimeControls'
import { Typography } from '@material-ui/core/';

class CustomMenuContainer extends Component {
    increaseGridIncrement = () => {
        this.props.settings.interval >= 100 ? this.props.handleError({errors: ["Grid size cannot be any bigger"]}) : this.props.increaseGridIncrement(this.props.settings.interval + 5)
    }

    decreaseGridIncrement = () => {
        this.props.settings.interval <= 5 ? this.props.handleError({errors: ["Grid size cannot be any smaller"]}) : this.props.decreaseGridIncrement(this.props.settings.interval - 5 )
    }

    render() {
        return (
            <div id="Customization-Menu-Container" style={{backgroundColor:"#CDCDCD", height:"150px"}}>
                <div id="custom-menu-content" style={{paddingTop:"2.6%"}}>
                    <div id="custom-menu-content-grid" style={{marginLeft:"90px", display:"inline"}}>
                    <IconButton onClick={this.decreaseGridIncrement} color="black" ><ExpandMore/></IconButton>
                        <Typography style={{display: "inline"}} color="black" variant="headline">GRID INTERVAL:  {this.props.settings.interval}</Typography>
                    <IconButton onClick={this.increaseGridIncrement} color="black"><ExpandLess/></IconButton>
                    </div>
                    <AnimeControls/>
                    <Typography style={{display: "inline", marginLeft: '520px'}} color="black" variant="headline">PLAYER:</Typography><Typography style={{display: "inline", marginLeft: '30px'}} color="black" variant="headline">{this.props.players.selectedPlayer}</Typography>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        updateGridDimensions, increaseGridIncrement, decreaseGridIncrement, handleError
    }, dispatch)
}
  
export default connect(mapStateToProps, mapActionsToProps)(CustomMenuContainer);