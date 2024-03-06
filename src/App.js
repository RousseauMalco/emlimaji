import logo from './logo.svg';
import './App.css';
import { MakeTeamsButton } from './Components/MakeTeamsButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <p>
            Welcome to GroupMate!
          </p>
          <p>
            Upload a CSV to get started:
          </p>
        </div>
        <div>
            < MakeTeamsButton />
        </div>
        <div>
          <p>
            this is where the teams output might go 
          </p>
        </div>
          {/* Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </p> */}
      </header>
    </div>
  );
}

export default App;
