import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <div className="App-header">
          <img src="logo.svg" alt="logo" height='500' width='500' />
          <h1> School Dashboard</h1>
        </div>
      </header>
        <div className="App-body">
          <p> Login to access the full dashboard</p>
        </div>
      <footer>
        <div className="App-footer">
            <p> Copyright {getFullYear()} - {getFooterCopy(true)} </p>
        </div>
      </footer>
    </body> 
  );
}

export default App;
