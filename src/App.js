import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello braciszku
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
      <p> This is a paragraph.</p>
    </div>
    <p> This is a paragraph.</p>
    </>
  );
}

export default App;
