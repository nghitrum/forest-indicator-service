import React, { Component } from "react";

import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import RightPanel from "./components/right-panel/RightPanel";
import LeftPanel from "./components/left-panel/LeftPanel";
import ChartContainer from "./components/chart-container/ChartContainer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <Header />

        <div className="col-lg-2">
          <LeftPanel />
        </div>

        <div className="col-lg-8">
          <ChartContainer />
        </div>

        <div className="col-lg-2">
          <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
