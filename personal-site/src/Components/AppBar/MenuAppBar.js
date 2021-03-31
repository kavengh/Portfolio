import React from "react";
import { Fab, AppBar, Toolbar, Grid } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import BasicButtonGroup from "../AppBar/BasicButtonGroup";
import ScrollToColor01 from "../../ScrollToChange";
import BackToTop from "../../BackToTop";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    minHeight: "64px",
    top: "auto",
    bottom: 0,
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
        <ScrollToColor01>
          <AppBar color="transparent" elevation={0}>
            <Toolbar className={classes.toolbar}>
              <Grid container spacing={3}>
                <Grid item xs></Grid>

                <Grid item xs>
                  <BasicButtonGroup
                    color="primary"
                    className={classes.buttonGroup}
                  ></BasicButtonGroup>
                </Grid>

                <Grid item xs></Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ScrollToColor01>
      </ElevationScroll>
      <BackToTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </React.Fragment>
  );
}
