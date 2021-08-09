// import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from "./Home"



function App() {
  const me = {
    name: "Colyn"
  }

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
