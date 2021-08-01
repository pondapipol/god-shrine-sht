import "./App.css";
import Home from "./pages/Home";
import ChooseIncentQuantity from "./pages/ChooseIncentQuantity";
import ChooseOffering from "./pages/ChooseOffering";
import { Godgen } from "./pages/Godgen";
import { Wish } from "./pages/Wish";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/choose-incent-quantity">
          <ChooseIncentQuantity />
        </Route>
        <Route path="/choose-offering">
          <ChooseOffering />
        </Route>
        <Route path="/godgen">
          <Godgen />
        </Route>
        <Route path="/wish">
          <Wish />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
