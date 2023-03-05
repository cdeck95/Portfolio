import { Link } from "react-router-dom";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Icon, IconButton, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type NavProps = {
  navOpen: boolean | undefined;
  setNavOpen: Function;
};

function NavContent({ navOpen, setNavOpen }: NavProps) {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("md"));

  const showNav = navOpen ? true : undefined; // weird ts issue

  const closeMobileNav = (): void => {
    if (isMobile) {
      setNavOpen(false);
    }
  };

  const isSmallFormFactor = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumFormFactor = useMediaQuery(theme.breakpoints.between('sm' , 'md'));
  const isLargeFormFactor = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isExtraLargeFormFactor = useMediaQuery(theme.breakpoints.between('lg' , 'xl'));

useEffect(() => {
  if (isSmallFormFactor) {
    setNavOpen(false);
  } else if(isMediumFormFactor){
    setNavOpen(false);
  } else if(isLargeFormFactor){
    setNavOpen(true);
  } else setNavOpen(true);
}, [isSmallFormFactor, isMediumFormFactor, isLargeFormFactor, isExtraLargeFormFactor]);

 
  // Function for opening the URL for the Asset
  const handleOpenLink = (name: string) => {
    switch (name) {
      case "github":
        window.open("https://github.com/cdeck95");
        break;
      case "LinkedIn":
        window.open("https://experience.oaccnft.com");
        break;
      default:
        window.open("https://github.com/cdeck95");
        break;
    }
  };

  return (
    <div
      style={{
        height: "100%",
        background: "#C3ACD0",
        fontFamily: "Bebas Neue",
      }}
    >
      <Box
        display="flex"
        sx={{
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >

       
        <Box
          sx={{
            background: "#C3ACD0",
          }}
        >
          <Box
            sx={{
              margin: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={1}>
              <GitHubIcon
                aria-label="GitHub link"
                color="primary"
                onClick={() => {
                  handleOpenLink("github");
                }} 
                sx={{ "&:hover": { color: "#F7EFE5" } }}
              />
              <LinkedInIcon
                aria-label="LinkedIn Profile"
                color="primary"
                onClick={() => {
                  handleOpenLink("LinkedIn");
                }} sx={{ "&:hover": { color: "#F7EFE5" } }}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default NavContent;
