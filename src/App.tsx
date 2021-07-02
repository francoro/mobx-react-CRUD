import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './modules/views/pages/Login'
import  Dashboard from './modules/views/pages/Dashboard'
import UserStore from "./store/users/UserStore"

function App() {
  const store = new UserStore();
  return (
      <Router> 
        <Switch>
          <Route exact={true} path="/">
            <Login />
          </Route>
          <Route exact={true} path="/dashboard">
            <Dashboard store={store} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
