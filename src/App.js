import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import { Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/pages/Dashboard";
import Cards from "./components/pages/Cards";
import Request from "./components/pages/Request";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Layout>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
