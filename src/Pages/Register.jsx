import React from 'react'
import { useMediaQuery} from 'use-media-size'
import Navbar from '../Layout/Navbar'
import MobileNav from '../Layout/MobileNav'
import RegisterForm from '../Components/RegisterForm'
import Footer from '../Layout/Footer'

const Register = () => {
  const isMobile = useMediaQuery('(max-width:680px)')

  return (
    <>
    {!isMobile?(<Navbar active="register" />):(<MobileNav/>)}
      <RegisterForm />
      <Footer />
    </>
  )
}

export default Register