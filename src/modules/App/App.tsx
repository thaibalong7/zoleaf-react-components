import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Proland from "modules/landingpage-proland/Proland";
import Home from "modules/home/containers/home";

const App: FC = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landingpage/proland" element={<Proland />} />
    </Routes>
  </Router>
};

export default App;
