import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import HeaderNavbar from "./components/HeaderNavbar";
import FooterBar from "./components/FooterBar";
import CandidateDetail from "./components/CandidateDetail";

const App = () => {
  return (
    <div className="App">
      <HeaderNavbar />

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/candidate/:id" component={CandidateDetail} />
        </Switch>
      </div>
      <FooterBar />
    </div>

  );
};

export default App;
