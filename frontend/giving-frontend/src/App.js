import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login/Login";
import Header from "./components/basic/Header/Header";
import Footer from "./components/basic/Footer/Footer";
function App() {
  const isLoggedIn = true;
  return (
    <div className="App">
      <Header />

      <RegistrationForm />
      <Footer />
      {/* <RegistrationForm /> */}
    </div>
  );
}

export default App;
