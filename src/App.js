import logo from "./logo.svg";
import "./App.css";
import Destinations from "./views/Destinations";
import Slider from "./components/public/sliderEnterprise/Slider";
import Flyingpoints from "./views/Flyingpoints";
function App() {
  return (
    <div className="App">
      <Destinations />
      <Slider />
      <Flyingpoints />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
