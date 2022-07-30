import React from 'react'
import { auth } from '../firebase/clientApp'
import { GithubAuthProvider, getAuth } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import initFirebase from '../firebase/clientApp'

// initFirebase()

// const auth = getAuth()

const uiConfig = {
  signInSuccessUrl: "/",
  // Display github as auth providers
  signInOptions: [GithubAuthProvider.PROVIDER_ID],
};

const SignInScreen = () => {
  return (
    <div className='github-auth'
      style={{
        maxWidth: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Ethiqual Login</h1>
      <p>Sign in with Github below:</p>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={auth}
      />
    </div>
  )
}

export default SignInScreen;