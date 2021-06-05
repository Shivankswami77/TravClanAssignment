import "./App.css";
import Customerbids from "./components/Customerbids";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}></Route>

          <Route path="/customerbids" exact component={Customerbids}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
