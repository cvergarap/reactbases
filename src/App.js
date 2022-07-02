import logo from './logo.svg';
import fondoHeader from './img/iron-man_plata-volando_3840x1920.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
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
        <img src={fondoHeader} className="" alt="logo" />
      </header>
    </div>
  );
}

export default App;
