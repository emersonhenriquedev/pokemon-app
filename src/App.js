import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
// import "./App.css";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pokemon/:id" component={Pokemon} />
    </Switch>
  );
}

export default App;
