import { Box, ImageList, ImageListItem, ImageListItemBar, ThemeProvider } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import './styles/App.scss';
import oaccLogoWhite from "./assets/accLogo.png";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: '[Project 1 Name]',
    description: '[Project 1 Description]',
    image: '[Project 1 Image URL]',
    link: '[Project 1 Link URL]',
  },
  {
    id: 2,
    name: '[Project 2 Name]',
    description: '[Project 2 Description]',
    image: '[Project 2 Image URL]',
    link: '[Project 2 Link URL]',
  },
  {
    id: 3,
    name: '[Project 3 Name]',
    description: '[Project 3 Description]',
    image: '[Project 3 Image URL]',
    link: '[Project 3 Link URL]',
  },
  {
    id: 4,
    name: 'The Mad Scientist - Discord Bot',
    description: 'A Discord Bot that returns the image for the requested token, with a blurb asbout whether that token suffered side effects during the experience.',
    image: oaccLogoWhite,
    link: 'https://github.com/cdeck95/ACC-Discord-Bot',
  },
];

function Portfolio () {
    function handleOnSelect(project: Project): void {
        throw new Error('Function not implemented.');
    }

    function handleMetaOpen(project: Project) {
        throw new Error('Function not implemented.');
    }

  return (
    <Box className="row">
        <Box className="left-column">
            <Box sx={{overflowY: "auto", maxHeight: "600px" }}> 
              <ImageList className="image-list" cols={2} sx={{maxHeight: '100%', overflow: 'auto'}}>
              {projects.map((project) => (
                    <ImageListItem
                      key={project.id}
                      sx={{
                        minHeight: "200px",
                        "&:hover": {
                          borderStyle: "solid",
                          borderWidth: "5px",
                          borderColor: "#FED100",
                        },
                      }}
                    >
                      <img
                        src={project.image}
                        srcSet={project.image}
                        alt={"" + project.id}
                        loading="lazy"
                        onClick={() => handleOnSelect(project)}
                      />

                      <ImageListItemBar
                        className="teddy-list"
                        title={project.name}
                        actionIcon={
                          <InfoIcon
                            key="threeDots"
                            sx={{ color: "#1E1E1E" }}
                            aria-label={`metadata`}
                            onClick={() => handleMetaOpen(project)}
                          />
                        }
                      />
                    </ImageListItem>
                ))}
              </ImageList>
            </Box>
        </Box>
        <Box className="right-column">
            <h2>Portfolio</h2>
        </Box>    
    </Box>
  );
};

export default Portfolio;
