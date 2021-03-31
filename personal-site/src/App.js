import React, { useState } from "react";
import "./App.css";
import MenuAppBar from "./Components/AppBar/MenuAppBar";
import SimpleContainer from "./Components/AppBar/SimpleContainer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ProjectDisplay from "./ProjectDisplay";

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MenuAppBar></MenuAppBar>
        <div style={{ padding: "40px", backgroundColor: "#f4d58d" }}></div>

        <SimpleContainer info="Eli">
          hello bye hello bye hello bye hello bye hello bye hello bye hello bye
          hello bye hello bye hello bye hello bye hello bye hello bye hello bye
          hello bye hello bye hello bye hello bye hello bye hello bye hello bye
          hello bye hello bye hello bye hello bye hello bye hello bye hello bye
          hello bye hello bye hello bye hello bye hello bye hello bye hello bye
          hello bye
        </SimpleContainer>
        <SimpleContainer>
          <ProjectDisplay></ProjectDisplay>
        </SimpleContainer>
        <div id="hehe"></div>
      </div>
    </ThemeProvider>
  );
};

export default App;
