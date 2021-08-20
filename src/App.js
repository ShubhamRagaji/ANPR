import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../src/Pages/Login/Login'
import Alerts from './Pages/Alerts/Alerts';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" strict exact>
            <Login />
          </Route>  

          <Route path="/alerts" strict exact>
            <Alerts />
          </Route>         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
