import React from 'react'
import InsideEmailTopBar from './InsideEmailTopBar'
import './insideEmail.css'
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import ReplyIcon from '@mui/icons-material/Reply';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

function InsideEmail({sender, email, subject, time, message, setEmailViewing}) {

  return (
    <div className="inside-email-container">
      <InsideEmailTopBar setEmailViewing={setEmailViewing}/>

      <div className="email-body-container">

        <div style={{paddingTop: '50px', width: '30px'}}>
          <Avatar className="sender-avatar"/>
        </div>

        <div style={{flex: '1'}}>
        <div className="email-subject">
          <h3>{subject}</h3>
          <div className="subject-icons" style={{whiteSpace: 'nowrap', paddingRight: '15px'}}>
            <IconButton>
              <PrintIcon sx={{fontSize: '20px'}}/>
            </IconButton>
            <IconButton>
              <OpenInNewIcon sx={{fontSize: '20px'}}/>
            </IconButton>
          </div>
        </div>
        <div className="sender-details" >
            
            <span className="sender-name" style={{whiteSpace: 'nowrap'}}>{sender}</span>
            <span className="sender-email" style={{whiteSpace: 'nowrap', flex: '1', padding: '5px 5px'}}>&lt;{email}&gt;</span>
            
            <span className="time-sent">{time}</span>
            <span style={{whiteSpace: 'nowrap'}}>
              <IconButton>
                <StarOutlineIcon sx={{fontSize: '20px'}}/>
              </IconButton>
              <IconButton>
                <ReplyIcon sx={{fontSize: '20px'}}/>
              </IconButton>
              <IconButton>
                <MoreVertIcon sx={{fontSize: '20px'}}/>
              </IconButton>
            </span>
          </div>
          <div className="description-body">
            <span>{message}</span>
          </div>
          </div>
      </div>
  </div>
  )
}

export default InsideEmail