//React Dependencies
import React, { Component } from 'react';
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
//Actions
import { routeActions } from 'react-router-redux'
import { addPlayer, selectPlayer } from '../actions/playbook-actions'
import { updatePoint } from '../actions/move-actions'
//SpeedDial Dependencies
import { SpeedDial, SpeedDialAction, SpeedDialIcon} from '@material-ui/lab'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Custom Icons
import { StraightRouteIcon, SharpRouteIcon, SquiggleRoute, GroupIcon } from '../assets/menuIcons/Icons'
//Default Icons
import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    height: 0,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

const actions = [
  { icon: <StraightRouteIcon/>, name: 'Straight Route' },
  { icon: <SharpRouteIcon/>, name: 'Sharp Route' },
  { icon: <SquiggleRoute/>, name: 'Round Route' },
  { icon: <GroupIcon />, name: 'Group' },
  { icon: <ContentCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class PlaybookMenu extends Component {
  state = {
    open: false,
    hidden: false,
  };

  defaultNamer = () => {
    let players = Object.keys(this.props.players.roster)
    return players ? players.last : 1
  }

  postToPlayers = () => {
    let x = Math.round(this.props.settings.width/2)
    let y = Math.round(this.props.settings.height/2)
    fetch("http://localhost:3000/api/v1/players/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ play_id: localStorage.getItem("selectedPlay"), name: `P${this.defaultNamer()}`,
        moves_attributes: [{
          startX: x,
          startY: y,
          endX: x,
          endY: y,
          startDelay: 0,
          endDelay: 0, 
          duration: 3,
          order: this.props.moves.moveIndex,
        }]
      })
    })
    .then(res => res.json())
    .then(playerData => {
      let newPlayer = {}
      newPlayer[playerData.id] = playerData
      this.props.addPlayer(newPlayer)
      this.props.selectPlayer(playerData.id)

      let move = playerData.moves[this.props.moves.moveIndex]
      this.props.updatePoint(this.props.moves.points, {...move})
    })
  }

  handleVisibility = () => {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden,
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
    this.postToPlayers()
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;
    return (
      <div className={classes.root}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon/>}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

PlaybookMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
      ...routeActions, addPlayer, selectPlayer, updatePoint,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PlaybookMenu)));