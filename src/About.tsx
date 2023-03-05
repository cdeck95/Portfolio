import './styles/App.scss';

import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h2>About Me</h2>
            <p>[Your Bio]</p>
            <h3>Skills</h3>
                <ul>
                    <li>[Skill 1]</li>
                    <li>[Skill 2]</li>
                    <li>[Skill 3]</li>
                </ul>
                <h3>Interests</h3>
                <ul>
                    <li>[Interest 1]</li>
                    <li>[Interest 2]</li>
                    <li>[Interest 3]</li>
                </ul>
        </div>
      </header>
    </div>
  );
}

export default About;
