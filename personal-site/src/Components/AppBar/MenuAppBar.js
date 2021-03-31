import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import BasicButtonGroup from "./BasicButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={3}>
              <Grid item xs>
                <BasicButtonGroup
                  className={classes.buttonGroup}
                ></BasicButtonGroup>
              </Grid>
              <Hidden mdDown>
                <Grid item xs>
                  <Typography variant="h4" className={classes.title}>
                    Kaven Vohra
                  </Typography>
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <Grid item xs></Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
