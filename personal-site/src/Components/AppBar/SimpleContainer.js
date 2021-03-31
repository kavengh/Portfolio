import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    backgroundColor: "#f4d58d",
    color: "black",
    padding: "50px",
  },
  seperation: {
    backgroundColor: "#32312F",
    height: "100px",
  },
  innerdiv: {
    width: "90%",
    margin: "auto",
    padding: "2rem",
    backgroundColor: "#333533",
    borderRadius: "25px",
    color: "white",
  },
}));

export default function SimpleContainer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="false" className={classes.Container}>
        <div className={classes.innerdiv}>{props.children}</div>
      </Container>
    </React.Fragment>
  );
}
