import React from "react";
import { Icon } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./styles/App.scss";

interface SocialMediaListProps {
    icons: {
      name: string;
      url: string;
    }[];
  }

  const getIconComponent = (name: string) => {
    switch (name) {
      case "github":
        return <GithubIcon />;
      case "linkedIn":
        return <LinkedInIcon />;
      case "email":
        return <EmailIcon />;
      default:
        return null;
    }
  };
  
  
  const SocialMediaList: React.FC<SocialMediaListProps> = ({ icons }) => {
    return (
      <div className="social-media-list">
        {icons.map((icon, index) => (
          <a key={index} href={icon.url} target="_blank" rel="noreferrer">
            <Icon className="social-media-list-icon">
              {getIconComponent(icon.name)}
            </Icon>
          </a>
        ))}
        <div className="vertical-bar"></div>
      </div>
    );
  };
  
  export default SocialMediaList;