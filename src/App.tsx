import './styles/App.scss';
import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll } from 'react-scroll';
import Portfolio from './Portfolio';
import Contact from './Contact';
import SectionComponent from './SectionComponent';
import About from './About';
import DarkModeToggleSwitch from './DarkModeToggleSwitch';
import ThemeContext, { DARK_THEME, LIGHT_THEME, DarkMode } from './styles/theme';
import Sidebar from 'global/Sidebar';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const sections = [
  {section: <About/>, title: "About"},
  {section: <Portfolio/>, title: "Portfolio"},
  {section: <Contact/>, title: "Contact"},
];

interface DotProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

function Dot({ title, active, onClick }: DotProps) {
  const style = {
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    backgroundColor: active ? '#333' : '#bbb',
    margin: "10px",
    cursor: 'pointer',
  };

  return (
    <div className="row" onClick={onClick}>
      <div style={{ fontSize: '16px', fontFamily: "Bebas Neue", margin: "7px"}}>{title}</div>
      <div style={style} />
    </div>
  );
}

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const [isSectionChanging, setIsSectionChanging] = useState(false);


  useEffect(() => {
    const handleScroll = (event: { deltaY: any; }) => {
      const { deltaY } = event;
      setIsSectionChanging(true);
      if (deltaY > 0) {
        setCurrentSectionIndex((prevIndex) =>
          prevIndex === sections.length - 1 ? prevIndex : prevIndex + 1
        );
      } else if (deltaY < 0) {
        setCurrentSectionIndex((prevIndex) =>
          prevIndex === 0 ? prevIndex : prevIndex - 1
        );
      }
      
      setTimeout(() => setIsSectionChanging(false), 350);
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [sections]);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentSectionIndex(index);
  };

  const dots = sections.map((section, index) => (
    <Dot
      key={index}
      title={section.title}
      active={index === currentSectionIndex}
      onClick={() => handleDotClick(index)}
    />
  ));

  interface SectionComponentProps {
  children: React.ReactNode;
  isActive: boolean;
}

function SectionComponent({ children, isActive }: SectionComponentProps) {
  const [isVisible, setIsVisible] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 500); // 500ms is the duration of the fade out animation
    }
  }, [isActive]);

  return (
    <div className="SectionComponent" style={{ opacity: isVisible ? 1 : 0 }}>
      {children}
    </div>
  );
}

  return (
    <div>
      <head>
        <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap&family=Roboto"
        rel="stylesheet"
        />
      </head>
    <div className="page">
      <section className={`section${isSectionChanging ? ' changing' : ''}`}>
        <div style={{ opacity: isSectionChanging ? 0 : 1 }}>
          {sections[currentSectionIndex].section}
        </div>
      </section>
      <div className="dots">{dots}</div>
    </div>
    </div>
    
  );
}
    

export default App;
