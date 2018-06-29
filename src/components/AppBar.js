import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// import MenuIcon from '@material-ui/icons/Menu';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/styles';


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

  let logOut = <Button color="inherit" onClick={()=> localStorage.clear()}>Logout</Button>
  let logIn = <Button color="inherit" onClick={()=> props.props.history.push('/login')}>Login</Button>
  console.log("appbar props", props)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
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