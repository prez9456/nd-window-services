import * as React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import styled from '@emotion/styled';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Nav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Home/>
    
    <NavBox>
      <BottomNav
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
        <NavButton label="Home" leftbtn={'30px'} icon={<HomeRoundedIcon />} />
        <NavButton label="About" icon={<InfoSharpIcon />} />
        <NavButton label="Contact" rightbtn={'30px'} icon={<EmailRoundedIcon />} />
      </BottomNav>
    </NavBox>
    </>
  );
}

const NavBox = styled(Box)`
  bottom: 0;
  position: fixed;
  border-radius: 30px;

  width: 70%;
  margin-bottom: 5%;

  @media (max-width: 768px) { 
    width: 65%;
    margin-bottom: 10%;
  }
`;

const BottomNav = styled(BottomNavigation)`
  border-style: solid;
  border-radius: 30px;
  opacity: 0.8;

  :hover{
    opacity: 1.0;
  }
  `;

const NavButton = styled(BottomNavigationAction)`
  margin: auto;
  border-top-left-radius: ${props => props.leftbtn || '0px'};
  border-bottom-left-radius: ${props => props.leftbtn || '0px'};
  border-top-right-radius: ${props => props.rightbtn || '0px'};
  border-bottom-right-radius: ${props => props.rightbtn || '0px'};
`;

export default Nav;