import React, {useState, useEffect} from 'react'
import './app.css'
import Login from './Login'
import Header from './Header'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'
import MailList from './MailList'
import SentMailBox from './SentMailBox'
import axios from 'axios'

function App() {

  const [sentMailBoxOpen, setSentMailBoxOpen] = useState(false)
  const [totalEmailsSent, setTotalEmailsSent] = useState()
  const [sentEmailList, setSentEmailList] = useState()
  const [emailJustSent, setEmailJustSent] = useState()
  // const [currentUser, setCurrentUser] = useState(JSON.parse(window.sessionStorage.getItem('user')) || '')

  useEffect(() => {
    axios.get('http://localhost:3001').then((response) => {
        setSentEmailList(response.data.reverse())
        setTotalEmailsSent(response.data.length || 0)
        setEmailJustSent(false)
    })
}, [emailJustSent])

  // useEffect(() => {
  //   window.sessionStorage.setItem('user', JSON.stringify(currentUser))
  // })

  return (
      <div className="app">
        {/*{!currentUser ? <Login setCurrentUser={setCurrentUser} /> : */}
          <div style={{height: '100%'}}> 
         <Header setSentMailBoxOpen={setSentMailBoxOpen} avatarImage={currentUser.imageUrl} setCurrentUser={setCurrentUser} />
          <div className="app-body">
            <SidebarLeft setSentMailBoxOpen={setSentMailBoxOpen} totalEmailsSent={totalEmailsSent} setEmailJustSent={setEmailJustSent}/>
          
             {sentMailBoxOpen ? <SentMailBox sentEmailList={sentEmailList} setSentEmailList={setSentEmailList}/> : <MailList /> }
     
            <SidebarRight/>
          </div>
          </div> 
      </div>
  );
}

export default App;
