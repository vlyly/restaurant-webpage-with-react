import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import Reservation from "./components/reservation/reservation";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/reservation">
          <Reservation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
