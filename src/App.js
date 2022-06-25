import React from "react";
import "./App.css";

// import { CssBaseline, Grid } from "@mui/material";

import Header from "./Components/Header/Head";
import Footer from "./Components/Footer/Footer";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <List />
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default App;
