import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { teal } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

function Header(props) {

  return (
    <div className="header-container">

        <div className="header-left">
            <IconButton> 
                <MenuIcon color="action"/>
            </IconButton>
            <img style={{cursor: 'pointer'}} onClick={() => props.setSentMailBoxOpen(false)} 
            alt="home" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"></img>
        </div>

        <div className="header-middle">
            <div className="search-bar">
                <IconButton> 
                    <SearchIcon color="action"/>
                </IconButton>
                <input className="search-field" type="text" placeholder="Search mail"></input>
                <IconButton> 
                    <TuneIcon color="action"/>
                </IconButton>
            </div>
        </div>

        <div className="header-right">
            <IconButton > 
                <HelpOutlineIcon color="action"/>
            </IconButton>
            <IconButton > 
                <SettingsIcon color="action"/>
            </IconButton>
            <IconButton> 
                <AppsIcon color="action"/>
            </IconButton>
            <IconButton onClick={() => props.setCurrentUser('')} sx={{marginLeft: '5px'}}>
            <Avatar src={props.avatarImage} sx={{ bgcolor: teal[900], height: '33px', width: '33px' }}/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header