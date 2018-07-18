import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'uuid'
//Components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import { hoverTitle } from '../components/anime'
import { ChangeHistory } from '@material-ui/icons'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  let myHistory = props.props.history
  
  const logOutAction = () => {
    localStorage.clear()
    myHistory.push('/')
  }

  const hoverEffect = () => {
    console.log("Mouse over title")
    return hoverTitle()
  }

  let logOut = <Button style={{marginLeft: "800px"}} color="inherit" onClick={logOutAction}>Logout</Button>
  let logIn = <Button style={{marginLeft: "800px"}} color="inherit" onClick={()=> props.props.history.push('/login')}>Login</Button>
  let playbook = "PLAYBOOK".split("")
  let title = playbook.map(letter => <Typography key={UUID()} id={`title-${letter}`} display="inline" variant="title" color="inherit" className={classes.flex}>{letter}</Typography>)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={()=> props.props.history.push('/home') } className={classes.menuButton} color="inherit" aria-label="Menu">
            <ChangeHistory/>
          </IconButton>
          <ButtonBase onClick={()=> props.props.history.push('/')} id="app-bar-home" onMouseEnter={hoverEffect} style={{marginLeft: "807px"}}>
            {title}
          </ButtonBase>
          {localStorage.token? logOut : logIn}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);