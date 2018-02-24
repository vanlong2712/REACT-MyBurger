import React, { Fragment } from 'react';

import classes from './SideDrawer.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Backdrop from '../UI/Backdrop/Backdrop';

const sideDrawer = props => {
  let attachedClassed = [classes.sideDrawer, classes.close];
  if (props.open) {
    attachedClassed = [classes.sideDrawer, classes.open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClassed.join(' ')}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
