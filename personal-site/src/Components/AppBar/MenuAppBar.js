import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import BasicButtonGroup from "./BasicButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
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
      <CssBaseline />

      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs>
                <BasicButtonGroup></BasicButtonGroup>
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
      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  );
}
