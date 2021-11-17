import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header.component';
import {Content} from './components/Content.component';
import {Details} from './components/Details.component';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Header/>
      <Content/>
      <Details/>
    </div>
  );
}

export default App;
