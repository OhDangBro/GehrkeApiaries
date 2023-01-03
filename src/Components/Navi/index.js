import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HiveTwoToneIcon from '@mui/icons-material/HiveTwoTone';
import EmojiNatureTwoToneIcon from '@mui/icons-material/EmojiNatureTwoTone';
import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Navi() {
  const [value, setValue] = React.useState(0);
    return (
      <div className="wholeNav">
       <Box className="navBar" sx={{ width: 500 }}>
      <BottomNavigation
      className="bottomNav"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction href="#Home" label="Home" icon={<HomeIcon />} />
       <BottomNavigationAction href="#Honey" label="Honey" icon={<HiveTwoToneIcon />} />
        <BottomNavigationAction href="#Chapstick" label="Chapstick" icon={<SpaTwoToneIcon />} />
        <BottomNavigationAction href="#Bees" label="Bees" icon={<EmojiNatureTwoToneIcon />} />
        <BottomNavigationAction href="#Contact" label="Contact" icon={<ContactPageIcon />} />
      </BottomNavigation>
    </Box>
  </div>
      
    );
  }
  
  export default Navi;