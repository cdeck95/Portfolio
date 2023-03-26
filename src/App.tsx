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
  const [scrollDirection, setScrollDirection] = useState("");
  const [isSectionChanging, setIsSectionChanging] = useState(false);

  let scrollTimeout: NodeJS.Timeout;
  
  function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timerId: ReturnType<typeof setTimeout>;
    return function (this: Window, ...args: Parameters<T>) {
      clearTimeout(timerId);
      timerId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  useEffect(() => {
    const handleWheel = (event: { deltaY: number }) => {
      const { deltaY } = event;
      // Start transition right away
      setIsSectionChanging(true);

      // Wait for scrolling to finish before determining next section
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (deltaY > 0) {
          setCurrentSectionIndex((prevIndex) =>
          prevIndex === sections.length - 1 ? prevIndex : prevIndex + 1);
        } else if (deltaY < 0) {
          setCurrentSectionIndex((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
          );
        }

        setIsSectionChanging(false);
        }, 50);
    };

    let lastScrollY = window.pageYOffset;
    function handleScroll (this: Window, event: Event) {
      const scrollY = window.pageYOffset;
      // Start transition right away
      setIsSectionChanging(true);

      const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;

      // Wait for scrolling to finish before determining next section
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (direction == "down") {
          setCurrentSectionIndex((prevIndex) =>
          prevIndex === sections.length - 1 ? prevIndex : prevIndex + 1);
        } else if (direction == "up") {
          setCurrentSectionIndex((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
          );
        }

        setIsSectionChanging(false);
        }, 50);
    };

    const debouncedHandleScroll = debounce(handleScroll, 250);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('scroll', debouncedHandleScroll);
    

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [sections, scrollDirection]);

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
