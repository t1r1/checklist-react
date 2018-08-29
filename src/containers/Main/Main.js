import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import LeftMenu from "../LeftMenu/LeftMenu";
import TaskList from "../TaskList/TaskList";

const styles = theme => ({
  withBorder: {
    border: "1px solid black"
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.layout}>
        <Grid container spacing={32} alignItems="flex-start">
          <Grid item xs={12} sm={6} md={1} className={classes.withBorder}>
            пустая колонка слева
          </Grid>
          <Grid item xs={12} sm={5} md={3} className={classes.withBorder}>
            <LeftMenu />
          </Grid>
          <Grid item xs={12} sm={6} md={5} className={classes.withBorder}>
            <TaskList />
          </Grid>
          <Grid item xs={12} sm={6} md={1} className={classes.withBorder}>
            колонка с локацией задачи (папка Входящие)
          </Grid>
          <Grid item xs={12} sm={6} md={2} className={classes.withBorder}>
            пустая колонка справа
          </Grid>
        </Grid>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
