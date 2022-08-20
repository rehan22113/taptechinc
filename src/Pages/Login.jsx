import React from 'react'
import { useMediaQuery} from 'use-media-size'
import Navbar from '../Layout/Navbar'
import MobileNav from '../Layout/MobileNav'
import LoginForm from '../Components/LoginForm'
import Footer from '../Layout/Footer'


const Login = () => {
  const isMobile = useMediaQuery('(max-width:680px)')
  

  return (
   <>
    {!isMobile?(<Navbar active="login" />):(<MobileNav/>)}
    <LoginForm />
    <Footer />
   </>
  )
}

export default Login