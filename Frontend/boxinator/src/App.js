import Header from "./components/Header"
import Form from "./components/Form"
import Table from "./components/Table"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/listboxes">
            <Table />
          </Route>
          <Route path="/addbox">
            <Form />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
