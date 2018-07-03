//React Dependencies
import React, { Component } from 'react';
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { addPlayer } from '../actions/playbookMenu-actions'

//SpeedDial Dependencies
import { SpeedDial, SpeedDialAction, SpeedDialIcon} from '@material-ui/lab'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

//Custom Icons
import { PlusIcon, StraightRouteIcon, SharpRouteIcon } from '../assets/menuIcons/Icons'

//Default Icons
import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
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
  { icon: <StraightRouteIcon/>, name: 'StraightPath' },
  { icon: <SharpRouteIcon/>, name: 'StraightPath' },
  { icon: <ContentCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  // { icon: <PrintIcon />, name: 'Print' },
  // { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class PlaybookMenu extends Component {
  state = {
    open: false,
    hidden: false,
  };

  defaultNamer = () => {
    return this.props.players.last ? this.props.players.last.id + 1 : 1
  }

  postToPlayers = () => {
    fetch("http://localhost:3000/api/v1/players/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ play_id: localStorage.getItem("selectedPlay"), name: `P${this.defaultNamer()}`, x:625, y:370 })
    })
    .then(res => res.json())
    .then(json => {
      this.props.addPlayer({...json})
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
      ...routeActions, addPlayer
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PlaybookMenu)));