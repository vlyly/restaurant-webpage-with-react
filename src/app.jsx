import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import Reservation from "./components/reservation/reservation";

function App() {
  return (
    <BrowserRouter>
      {/* <navigation>
        <Link to="/">main</Link>
        <Link to="/reservation">reservation</Link>
      </navigation> */}
      <Switch>
        <Route path={["/", "/main"]} exact={true}>
          <Main />
        </Route>
        <Route path="/reservation" exact={true}>
          <Reservation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
