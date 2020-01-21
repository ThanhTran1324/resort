import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/resort/" exact component={Home} />
        <Route path="/resort/rooms/" exact component={Rooms} />
        <Route path="/resort/rooms/:slug" exact component={SingleRoom} />
        <Route exact component={Error} />
      </Switch>
    </div>
  );
}

export default App;
