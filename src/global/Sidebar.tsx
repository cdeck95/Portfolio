import NavContent from "./NavContent";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, useTheme } from "@mui/material";

const DRAWER_WIDTH = 280; // TODO maybe move this to constants file? Not sure how many more there will be

type SidebarProps = {
  navOpen: boolean;
  setNavOpen: Function;
};

function Sidebar({ navOpen, setNavOpen }: SidebarProps) {
  const theme = useTheme();

  return (
    <Box sx={{position: "fixed", top: "0", left: "0"}}>

    {navOpen
        ? <Drawer
            sx={{
        width: navOpen ? DRAWER_WIDTH : 50,
        flexShrink: 0,
        whiteSpace: "nowrap",
        background: "#FED100",
        borderRadius: `4px`,
        boxShadow: navOpen ? `2px 8px 8px 4px rgba(0, 0, 0, 0.25)` : `none`,
        "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            overflowY: "hidden",
            overflowX: "hidden",
            border: "none",
        },
        }}
        variant="persistent"
        anchor="left"
        open={navOpen}
        className="SidebarWrapper"
    >
        <Box
        sx={{
            background: "#C3ACD0",
            display: "flex",
            alignItems: "center",
            boxShadow: "none",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        }}
        >
        {/* <img height={"32px"} src={logo}></img> */}

        <IconButton onClick={() => setNavOpen(false)} size="large">
            <ChevronLeftIcon style={{ fill: "white" }} />
        </IconButton>
        </Box>
        <NavContent navOpen={navOpen} setNavOpen={setNavOpen} />
        </Drawer>
        : <IconButton color="inherit" aria-label="open drawer" onClick={() => setNavOpen(true)} size="large"> <MenuIcon /> </IconButton>
    }
    </Box>
  );
}

export default Sidebar;
