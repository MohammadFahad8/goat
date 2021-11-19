import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header.component';
import {Content} from './components/Content.component';
import {Routes,Route} from 'react-router-dom';
import {Events} from './components/Events.component';


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
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      
      {/* 
      <Content/>
      <Details/> */}
    </div>
  );
}

export default App;
