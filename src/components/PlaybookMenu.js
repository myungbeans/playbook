//React Dependencies
import React, { Component } from 'react';
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
//Actions
import { routeActions } from 'react-router-redux'
import { addPlayer, selectPlayer } from '../actions/playbook-actions'
import { updatePoint, hidePoint, removeMove } from '../actions/move-actions'
import { handleError } from '../actions/settings-actions'
//Custom Icons
import { StraightRouteIcon, SharpRouteIcon, SquiggleRoute, GroupIcon, TrashIcon, EraseRouteIcon } from '../assets/menuIcons/Icons'
//Fetch
import { destroyPlayer, hideMove } from '../APICalls'
//SpeedDial
import { SpeedDial, SpeedDialAction, SpeedDialIcon} from '@material-ui/lab'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: 0,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing.unit * 19,
    right: theme.spacing.unit * 3,
  },
});

const actions = [
  { icon: <StraightRouteIcon/>, name: 'Straight Route' },
  { icon: <SharpRouteIcon/>, name: 'Sharp Route' },
  { icon: <SquiggleRoute/>, name: 'Round Route' },
  { icon: <GroupIcon />, name: 'Group' },
  { icon: <EraseRouteIcon />, name: 'Erase Route' },
  { icon: <TrashIcon />, name: 'Delete' },
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

  menuActions = (e) => {
    e.preventDefault()
    switch(e.target.id){
      case 'trash-icon':
        return this.trash()
      case 'erase-route-icon':
        return this.erase()
      case 'group-icon':
        return this.developmentMessage()
      case 'squiggle-route-icon':
        return this.developmentMessage()
      case 'sharp-route-icon':
        return this.developmentMessage()
      default:
        return null
    }
  }

  developmentMessage = () => {
    this.props.handleError({errors: ["This feature is currently under development."]})
  }

  isPlayerSelected = () => {
    return this.props.players.selectedPlayer ? true : false
  }

  trash = () => {
    if(this.isPlayerSelected()){
      let {move} = this.findMoveAndPlayer()
      this.props.removeMove(this.props.moves.points, move.id)
      destroyPlayer(this.props.players.selectedPlayer)
      this.props.selectPlayer("")
    } else {
      this.props.handleError({errors: ["Please select a Player."]})
    }
  }

  findMoveAndPlayer = () => {
    if(!this.props.players.selectedPlayer){
      this.props.handleError({errors: ["Please select a Player."]})
    } else {
      let player = this.props.players.roster[this.props.players.selectedPlayer]
      let move = Object.values(this.props.moves.points).find(move => move.player_id === player.id)
      return {player, move}
    }
  }

  erase = () => {
    if(this.isPlayerSelected()){
      let {player, move} = this.findMoveAndPlayer()
      let prevPoints = this.props.moves.activeEndPoints
      if(move.startX === move.endX && move.startY === move.endY){
        return this.props.handleError({errors: ["Move already hidden."] })
      }
      move.endX = move.startX
      move.endY = move.startY
      hideMove({ player: { id: player.id, name: player.name, moves_attributes: [{...move}] }},
        () => { this.props.hidePoint(prevPoints, {...move})
      })
      return console.log("Hidden successfully")
    } else {
      this.props.handleError({errors: ["Please select a Player."]})
    }
  }

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;
    return (
      <div className={classes.root}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon"
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
              onClick={this.menuActions}
              title={action.name}
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
      ...routeActions, addPlayer, selectPlayer, updatePoint, hidePoint, removeMove, handleError
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PlaybookMenu)));