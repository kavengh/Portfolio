import React, { useState } from "react";
import "./App.css";
import MenuAppBar from "./Components/AppBar/MenuAppBar";

import SimpleContainer from "./Components/AppBar/SimpleContainer";

const App = (props) => {
  return (
    <div className="App">
      <MenuAppBar></MenuAppBar>
      <SimpleContainer></SimpleContainer>
      <SimpleContainer></SimpleContainer>
      <div id="hehe"></div>
    </div>
  );
};

export default App;
