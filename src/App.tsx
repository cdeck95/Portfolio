import './styles/App.scss';
import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll } from 'react-scroll';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import SocialMediaList from "./SocialMediaList";


const sections = [
  {section: <About/>, title: "About"},
  {section: <Portfolio/>, title: "Portfolio"},
  {section: <Contact/>, title: "Contact"},
];

const socialMediaIcons = [
  { name: "github", url: "https://github.com/cdeck95/" },
  { name: "linkedIn", url: "https://www.linkedin.com/in/chrisdeck95/" },
  { name: "email", url: "mailto:deckchris95@gmail.com" },
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
    backgroundColor: active ? '#FFE9B1' : '#FCFDF2',
    margin: "10px",
    cursor: 'pointer',
  };

  return (
    <div className="row" onClick={onClick}>
      <div className={active ? "Dots-Title-Active" : "Dots-Title"} style={{color: active ? "#FFE9B1"  : "#FCFDF2"}}>{title}</div>
      <div style={style} />
    </div>
  );
}

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const [isSectionChanging, setIsSectionChanging] = useState(false);

  let scrollTimeout: NodeJS.Timeout;


  useEffect(() => {
    // const handleScroll = (event: { deltaY: any; }) => {
    //   const { deltaY } = event;
    //   setIsSectionChanging(true);
    //   if (deltaY > 20) {
    //     setCurrentSectionIndex((prevIndex) =>
    //       prevIndex === sections.length - 1 ? prevIndex : prevIndex + 1
    //     );
    //   } else if (deltaY < -20) {
    //     setCurrentSectionIndex((prevIndex) =>
    //       prevIndex === 0 ? prevIndex : prevIndex - 1
    //     );
    //   }
      
    //   setTimeout(() => setIsSectionChanging(false), 350);
    // };

    // const debounce = (fn: any, delay: number) => {
    //   let timeoutId: any;
    //   return (...args: any) => {
    //     clearTimeout(timeoutId);
    //     timeoutId = setTimeout(() => {
    //       fn(...args);
    //     }, delay);
    //   };
    // };
    
    const handleScroll = (event: { deltaY: any }) => {
      const { deltaY } = event;

      // Start transition right away
      setIsSectionChanging(true);

      // Wait for scrolling to finish before determining next section
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
      if (deltaY > 0) {
        setCurrentSectionIndex((prevIndex) =>
          prevIndex === sections.length - 1 ? prevIndex : prevIndex + 1
        );
      } else if (deltaY < 0) {
        setCurrentSectionIndex((prevIndex) =>
          prevIndex === 0 ? prevIndex : prevIndex - 1
        );
      }

      setIsSectionChanging(false);
      }, 50);
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

  return (
    <div className="page">
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
      <SocialMediaList icons={socialMediaIcons} />
    </div>
    </div>
    
  );
}
    

export default App;
