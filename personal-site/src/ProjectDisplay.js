import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  paper: {
    backgroundColor: "#333533",
  },
  root: {},
  //position: "relative", display: "flex", alignItems: "center"
});

const url =
  "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2015/01/Blog_Learn-to-code.jpg.webp";

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      alignItems="stretch"
      justify="space-evenly"
    >
      <Grid item sm={3}>
        <Paper className={classes.paper} elevation={0}>
          <ProjectCard
            imgLink={url}
            altTitle="project"
            title="Project Placeholder"
            content="This is some placeholder text where the description of the project will go"
          ></ProjectCard>
        </Paper>
      </Grid>
      <Grid item sm={3}>
        <Paper className={classes.paper} elevation={0}>
          <ProjectCard
            imgLink={url}
            altTitle="project"
            title="Project Placeholder"
            content="This is some placeholder text where the description of the project will go"
          ></ProjectCard>
        </Paper>
      </Grid>
      <Grid item sm={3}>
        <Paper className={classes.paper} elevation={0}>
          <ProjectCard
            imgLink={url}
            altTitle="project"
            title="Project Placeholder"
            content="This is some placeholder text where the description of the project will go"
          ></ProjectCard>
        </Paper>
      </Grid>
    </Grid>
  );
}
