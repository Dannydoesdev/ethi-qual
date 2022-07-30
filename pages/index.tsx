import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import initFirebase from '../firebase/clientApp'
import { auth } from '../firebase/clientApp'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

// initFirebase()

const Home: NextPage = () => {
  // destructuring the auth state from the hook
  // user = current signed in user or undefined
  // loading = boolean indicating if the user is loading
  // error = error if any

  const [user, loading, error] = useAuthState(auth)

  console.log(`Current user: ${user} Loading:${loading} | Error: ${error}`)

  return (
    <div>Hello!</div>
  )
}

export default Home
