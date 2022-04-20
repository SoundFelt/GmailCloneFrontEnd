import React from 'react'
import GmailLogo from './gmail-logo.png'
import './login.css'
import {GoogleLogin} from 'react-google-login'

function Login(props) {

    const client_id = process.env.REACT_APP_GMAIL_CLIENT_ID

    const responseGoogle = (response) => {
        if (response.error) {
            alert(`Failed to login. Error: ${response.error}`)
        } else {
        props.setCurrentUser(response.profileObj)
        }
      }

  return (
    <div className="login-home">
    <img src={GmailLogo} alt="user-avatar"></img>
    <GoogleLogin
        clientId={client_id}
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        theme='dark'
    />
    </div>
  )
}

export default Login