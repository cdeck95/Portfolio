import './styles/App.scss';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import DarkModeToggleSwitch from './DarkModeToggleSwitch';
import ThemeContext, { DARK_THEME, LIGHT_THEME, DarkMode } from './styles/theme';
import Sidebar from 'global/Sidebar';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


function App() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => {
    setNavOpen(!isMobileScreen);
  }, [isMobileScreen]);
  return (
    
    <div className="App">
      <Sidebar navOpen={navOpen} setNavOpen={setNavOpen} />
        {/* <DarkModeToggleSwitch on={dark} toggle={toggleDarkMode}/> */}
        <div>
          <h1>Welcome to my portfolio!</h1>
          <p>My name is Chris Deck and I'm a professional Software Engineer.</p>
          <Portfolio></Portfolio>
        </div>
    </div>
  );
}

export default App;
