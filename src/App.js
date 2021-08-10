// import './App.css';
import { Switch, Route } from "react-router-dom";
import {Home} from "./Home"



function App() {

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
