import React from 'react'
import 'animate.css'
import './sidebaroption.css'
import { red } from '@mui/material/colors';

function SidebarOption({Icon, title, number, selectOption, idx, clickedOption, sentBuzzNotification}) {

    const active = clickedOption === idx

  return (
    <div onClick={() => selectOption(idx)} 
    className={`sidebar-option-container
      ${active && idx !== 5 ? 'active' : 'not-active'}
      ${idx > 9 && idx < 15 && 'dropdown'}
      ${idx === 3 && sentBuzzNotification && !active && 'animate__animated animate__heartBeat animate__infinite	infinite'}`}>
        <Icon sx={{fontSize: '1.3rem', color: (active && idx !== 5) || (sentBuzzNotification && idx === 3) ? red[700] : ''}} 
          color='action' className="icon"/>
        <h4 className="option-title hover-color-change">{title}</h4>
        <span className="option-number hover-color-change">{idx === 3 && number}</span>
    </div>
  )
}

export default SidebarOption