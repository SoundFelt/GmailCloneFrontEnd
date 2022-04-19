import React from 'react'
import './newMailBox.css'
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useForm} from 'react-hook-form';
import axios from 'axios'

function NewMailBox(props) {

    const {register, handleSubmit} = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
        axios.post('https://gmailclonebackend.herokuapp.com/api', {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
        }).then(() => console.log('success'))
        props.setNewMailBoxOpen(false)
        props.setSentBuzzNotification(true)
        props.setEmailJustSent(true)
    }

  return (
    <div className="mailbox-container">
        <div className="mailbox-topbar">
            <span>New Message</span>    
            <CloseIcon onClick={() => props.setNewMailBoxOpen(false)} 
            sx={{marginRight: '10px', color: 'rgb(200,200,200)', fontSize: '18px',
            '&:hover' : {cursor: 'pointer', color: 'white', backgroundColor: 'rgba(180,180,180, 0.5)'}}}/> 
        </div>
            <form className="mailbox-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="to-input">
                <label htmlFor="to">To</label>
                <input {...register('to', { required: true })} type="email"></input>
            </div>
            <div className="subject-input">
                <input {...register('subject', { required: true })} placeholder="Subject" type="text"></input>
            </div>
            <div className="subject-message">
                <textarea {...register('message', { required: true })}/>
            </div>
            <div className="send-message-bar">
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
            </div>
            </form>
    </div>
  )
}

export default NewMailBox