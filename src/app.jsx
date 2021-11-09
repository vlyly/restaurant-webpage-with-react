import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import Reservation from "./components/reservation/reservation";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/restaurant-webpage-with-react/main">main</Link>
        <Link to="/restaurant-webpage-with-react/reservation">reservation</Link>
      </nav>
      <Switch>
        <Route
          path={[
            "/restaurant-webpage-with-react",
            "/restaurant-webpage-with-react/main",
          ]}
          exact
        >
          <Main />
        </Route>
        <Route path="/restaurant-webpage-with-react/reservation">
          <Reservation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
