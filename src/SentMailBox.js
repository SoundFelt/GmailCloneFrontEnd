import React, {useState} from 'react'
import './mailList.css'
import MailListTopBar from './MailListTopBar'
import Email from './Email'
import InsideEmail from './InsideEmail'
import axios from 'axios'

function SentMailBox(props) {

    const [scroll, setScroll] = useState(false);
    const [emailViewing, setEmailViewing] = useState(false)
    const [emailInfo, setEmailInfo] = useState()
    
    const getEmailInfo = (id, idx, to, email, subject, time, message) => {
      setEmailInfo({to, email, subject, time, message})
      setClickedEmail(idx, id)
    }

    const setClickedEmail = (idx, id) => { 
      const sentEmailListBeforeDBUpdate = props.sentEmailList.map((email, emailIdx) => emailIdx === idx ? {...email, clicked: 1} : email)
      props.setSentEmailList(sentEmailListBeforeDBUpdate) 
      const emailToUpdate = props.sentEmailList.filter((email) => email.id === id)
      axios.patch('https://gmailclonebackend.herokuapp.com/api', {id: emailToUpdate[0].id}).then(() => console.log('axios patch success'))
    }

  return (
      <div className="maillist-container">
        {!emailViewing ?  
          <div>
            <MailListTopBar scroll={scroll} />
            <div onScroll={(e) => setScroll(e.target.scrollTop > 1)} className="email-list">
              {props.sentEmailList && props.sentEmailList.map((email, idx) => (
                <Email id={email.id} idx={idx} key={idx} clicked={email.clicked} to={email.to} subject={email.subject} message={email.message} 
                timeSent={email.time_sent} setEmailViewing={setEmailViewing} getEmailInfo={getEmailInfo}/>
              ))}
            </div>
          </div>
        : <InsideEmail {...emailInfo} setEmailViewing={setEmailViewing}/>}
    </div>
  )
}

export default SentMailBox