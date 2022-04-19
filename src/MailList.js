import React, {useEffect, useState} from 'react'
import './mailList.css'
import MailListTopBar from './MailListTopBar'
import Email from './Email'
import InsideEmail from './InsideEmail'

function MailList() {

    const emails = [
      {sender: 'Anthony', email: 'anthony.webcode@gmail.com', subject: 'Hello!', message: 'This is a clone project of Gmail.', time_sent: 'April 16th 17:05', clicked: 0},
      {sender: 'Click Compose', email: 'anthony.webcode@gmail.com', subject: 'You can click the compose button', message: 'When you send an "email", it will go into the sent box!', time_sent: 'April 16th 17:05', clicked: 0},
      {sender: 'Click Your Avatar', email: 'anthony.webcode@gmail.com', subject: 'This will log you out!', message: 'Thank you for viewing this project. :-)', time_sent: 'April 16th 17:05', clicked: 0},
    ]

    const [scroll, setScroll] = useState(false);
    const [emailViewing, setEmailViewing] = useState(false)
    const [emailInfo, setEmailInfo] = useState()
    const [emailList, setEmailList] = useState(JSON.parse(window.sessionStorage.getItem('inboxemails')) || emails)

    const getEmailInfo = (id, idx, sender, email, subject, time, message) => {
      setEmailInfo({id, sender, email, subject, time, message})
      setClickedEmail(idx)
    }

    const setClickedEmail = (idx) => { 
      const updatedEmails = emailList.map((email, emailIdx) => emailIdx === idx ? {...email, clicked: 1} : email) 
      setEmailList(updatedEmails)
    }

    useEffect(() => {
      window.sessionStorage.setItem('inboxemails', JSON.stringify(emailList))
    }, [emailList])

  return (
      <div className="maillist-container">
        {!emailViewing ?  
          <div>
            <MailListTopBar scroll={scroll} />
            <div onScroll={(e) => setScroll(e.target.scrollTop > 1)} className="email-list">
              {emailList.map((email, idx) => (
                <Email idx={idx} key={idx} clicked={email.clicked} sender={email.sender} email={email.email} subject={email.subject} message={email.message}
                timeSent={email.time_sent} setEmailViewing={setEmailViewing} getEmailInfo={getEmailInfo}/>
              ))}
            </div>
          </div>
        : <InsideEmail {...emailInfo} setEmailViewing={setEmailViewing}/>}
    </div>
  )
}

export default MailList