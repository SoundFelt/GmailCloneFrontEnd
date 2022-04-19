import React from 'react'
import './email.css'
import Checkbox from '@mui/material/Checkbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import IconButton from '@mui/material/IconButton';

function Email(props) {
    
    const clickedEmail = () => {
        props.setEmailViewing(true)
        props.getEmailInfo(props.id, props.idx, props.sender ? props.sender : props.to, props.email ? props.email : props.to, 
            props.subject, props.timeSent, props.message)
    }

  return (
        <div className={`email-container ${props.clicked === 1 && 'clicked'}`} onClick={clickedEmail}>
            <div className="icons-email-title">
                <Checkbox className="checkbox" sx={{color: 'rgb(210,210,210)', marginLeft: '4px'}}/>
                <IconButton sx={{marginLeft: '-8px'}}>
                <StarOutlineIcon className="star-icon" sx={{color: 'rgb(210,210,210)'}} />
                </IconButton>
                <span className={`sender ${props.clicked === 1 && 'text-clicked'}`}>{props.sender ? props.sender : props.to}</span>
            </div>
                <div className="cell">
                    <div className="content">
                        <span className="description">
                            <span className={`subject ${props.clicked === 1 && 'text-clicked'}`}>{props.subject}</span>
                            &nbsp;-&nbsp;{props.message}
                        </span>
                    </div>
                </div>
            <div className={`cell time ${props.clicked === 1 && 'text-clicked'}`}>{props.timeSent}</div>
        </div>
  )
}

export default Email