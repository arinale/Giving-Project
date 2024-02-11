import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <div>
        <h1>My App</h1>

        <Login />
        {/*<RegistrationForm /> */}
      </div>
    </div>
  );
}

export default App;
