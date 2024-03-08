import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login/Login";

import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const isLoggedIn = true;
  return (
    <div className="App">
      <div>
        <h1>My App</h1>
      </div>
      {/* <Login />
      <RegistrationForm /> */}

      <Router>
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/home" /> : <Login />}
        </Route>
      </Router>
    </div>
  );
}

export default App;
