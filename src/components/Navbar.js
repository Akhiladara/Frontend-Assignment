import React, { useState } from 'react';
import "./Navbar.css";


import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WalletIcon from '@mui/icons-material/Wallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';



const Navbar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const navbarElements = [
    {
      name: "Home",
      icon: <HomeIcon />,
      path: '/home'
    },
    {
      name: "Organization",
      icon: <CorporateFareIcon />,
      path: "/organization"
    },
    {
      name: "History",
      icon: <WorkHistoryIcon />,
      path: "/history"
    },
    {
      name: "Wallet",
      icon: <WalletIcon />,
      path: "/wallet"
    },
    {
      name: "Notifications",
      icon: <NotificationsIcon />,
      path: '/notifications'
    },
    {
      name: "About Us",
      icon: <InfoIcon />,
      path: '/about'
    },
    {
      name: "Contact Us",
      icon: <ContactSupportIcon />,
      path: '/contact'
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      path: '/settings'
    }
    ]

  return (
    <div className='navbar-container'>
      <div className='sidebar'>
        <div className='top-section'>
          <div className='logo-card'>
            <img src="https://media.licdn.com/dms/image/C4D0BAQGwNc23v7nwCw/company-logo_200_200/0/1674242049220/carboncell_logo?e=2147483647&v=beta&t=4KvdFwwikIB_6uMCPYAQxuYO8Q4K_cWhtsYj0BWPhZM"
            className="custom-logo" 
            alt="Logo"/>
            <h1 className='custom-name'>Carbon Cell</h1>
          </div>
          <div className='nav-menu'>
            <MenuIcon  onClick={toggle}/>
          </div>
        </div>
        {
          navbarElements.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className='icon'>{item.icon}</div>
              <div className='link-text'>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Navbar