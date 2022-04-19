import React from 'react'
import './mailListTopBar.css'
import Checkbox from '@mui/material/Checkbox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardIcon from '@mui/icons-material/Keyboard';

function MailListTopBar(props) {

  return ( 
    <div className={`maillist-topbar-container ${props.scroll && 'scroll'}`}>
        <div className="topbar-left">
            <div className="checkbox">
                <Checkbox sx={{color: 'rgb(120,120,120)', padding: '6px 3px', '&:hover': {borderRadius: '2px', backgroundColor: 'rgba(230,230,230, 0.5)'}}}/>
                <ArrowDropDownIcon sx={{color: 'rgb(120,120,120)', fontSize: '18px', '&:hover': {borderRadius: '2px', backgroundColor: 'rgba(230,230,230, 0.5)'}}}/>       
            </div>

            <RefreshIcon sx={{marginLeft: '20px', marginRight: '16px'}} color="action"/>
            <MoreVertIcon sx={{fontSize: '20px'}} color="action"/>
        </div>

        <div className="topbar-right">
            <span style={{whiteSpace: 'nowrap'}}>1-32 of 32</span>
            <ArrowBackIosIcon sx={{color: 'rgb(120,120,120)', fontSize: '12px', marginRight: '25px'}}/>
            <ArrowForwardIosIcon sx={{color: 'rgb(120,120,120)', fontSize: '12px', marginRight: '25px'}}/>
            <KeyboardIcon sx={{color: 'rgb(80,80,80)', fontSize: '20px'}}/>
            <ArrowDropDownIcon sx={{color: 'rgb(120,120,120)', fontSize: '18px',}}/>
        </div>
    </div>
  )
}

export default MailListTopBar