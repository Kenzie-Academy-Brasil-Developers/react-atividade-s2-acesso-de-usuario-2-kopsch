import "./App.css";
import { Switch, Route } from "react-router-dom";
import members from "./members";
import Home from "./Home";
import Company from "./pages/Company";
import Customer from "./pages/Customer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clientes:</h1>
        <Switch>
          <Route exact path="/">
            <Home members={members} />
          </Route>
          <Route exact path="/company/:id">
            <Company />
          </Route>
          <Route exact path="/customer/:id">
            <Customer />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
