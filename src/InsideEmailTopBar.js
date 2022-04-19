import React from 'react'
import './insideEmailTopBar.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';

function InsideEmailTopBar(props) {


  return (
    <div className="maillist-topbar-container">
        <div className="topbar-left">
            <div className="group-1">
                <IconButton onClick={() => props.setEmailViewing(false)} sx={{marginRight: '20px'}}>
                <ArrowBackIcon sx={{fontSize: '20px'}} color="action" />
                </IconButton>
                <IconButton sx={{marginRight: '8px'}}>
                <ArchiveIcon sx={{fontSize: '20px'}} color="action"/>  
                </IconButton>
                <IconButton sx={{marginRight: '6px'}}>
                <ReportIcon sx={{fontSize: '20px'}} color="action"/>
                </IconButton>
                <IconButton sx={{marginRight: '30px'}}>
                <DeleteIcon sx={{fontSize: '20px', }} color="action"/>
                </IconButton>
            </div>
            <div className="group-2">
                <IconButton sx={{marginRight: '8px'}}>
                <MarkAsUnreadIcon sx={{fontSize: '20px'}} color="action"/>
                </IconButton>
                <IconButton sx={{marginRight: '8px'}}>
                <AccessTimeFilledIcon sx={{fontSize: '20px'}} color="action"/>  
                </IconButton>
                <IconButton sx={{marginRight: '30px'}}>
                <CheckCircleOutlineIcon sx={{fontSize: '20px'}} color="action"/>
                </IconButton>
            </div>
            <div className="group-3">
                <IconButton sx={{marginRight: '8px'}}>
                <DriveFileMoveIcon sx={{fontSize: '20px'}} color="action"/>
                </IconButton>
                <IconButton sx={{marginRight: '8px'}}>
                <LabelIcon sx={{fontSize: '20px'}} color="action"/>       
                </IconButton>
                <IconButton>
                <MoreVertIcon sx={{fontSize: '20px'}} color="action"/>
                </IconButton>
            </div>
        </div>

        <div className="topbar-right" style={{whiteSpace: 'nowrap'}}>
            <span>1-32 of 32</span>
            <ArrowBackIosIcon sx={{color: 'rgb(120,120,120)', fontSize: '12px', marginRight: '25px'}}/>
            <ArrowForwardIosIcon sx={{color: 'rgb(120,120,120)', fontSize: '12px', marginRight: '25px'}}/>
            <KeyboardIcon sx={{color: 'rgb(80,80,80)', fontSize: '20px'}}/>
            <ArrowDropDownIcon sx={{color: 'rgb(120,120,120)', fontSize: '18px',}}/>
        </div>
    </div>
  )
}

export default InsideEmailTopBar