import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <div className="App-header">
          <img src="holberton-logo.jpg" alt="logo" height="auto" width="100px"/>
          <h1> School Dashboard</h1>
        </div>
      </header>
        <div className="App-body">
          <p> Login to access the full dashboard</p>
          <form>
            <label for="email">Email:</label>
            <input type="email" name="email" id="name" />
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button type="button">OK</button>
          </form>
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
