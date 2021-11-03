import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Recycle from "./components/Recycle/Recycle";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <div className="App__navbar">
        <Navbar />
      </div>
      <div className="App__main">
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>

            {localStorage.getItem("recycleBuddy-token") && (
              <Route exact path="/recycle">
                <Recycle />
              </Route>
            )}
          </Switch>
        </div>
      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
