import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="text"
        color="secondary"
        aria-label="text primary button group"
      >
        <Button>Bio</Button>
        <Button>Background</Button>
        <Button>Contact</Button>
      </ButtonGroup>
    </div>
  );
}
