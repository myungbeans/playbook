import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


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

  let logOut = <Button color="inherit" onClick={logOutAction}>Logout</Button>
  let logIn = <Button color="inherit" onClick={()=> props.props.history.push('/login')}>Login</Button>
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/*TODO: fix props.props*/}
          <IconButton onClick={()=> props.props.history.push('/home') } className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Playbook
          </Typography>
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