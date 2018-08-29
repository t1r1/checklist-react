import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "#db4c3f",
    color: "white"
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="default" className={classes.appBar}>
        appBar
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
