import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../home/containers/home";

const App: FC = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
};

export default App;
