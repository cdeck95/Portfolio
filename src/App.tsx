import './App.scss';

import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome to my portfolio!</h1>
          <p>My name is Chris Deck and I'm a professional Software Engineer.</p>
          <Portfolio></Portfolio>
        </div>
      </header>
    </div>
  );
}

export default App;
