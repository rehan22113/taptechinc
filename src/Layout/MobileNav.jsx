import React,{useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../utility/logo.png'
import { ContextApi } from '../Context'


const MobileNav = () => {
  const {updatedState,LogIn} = useContext(ContextApi)
  const [isLogin,setIsLogin] = useState(false)
  useEffect(() => {
    LogIn()
    if(updatedState){
      setIsLogin(true)
    }else{
      setIsLogin(false)
      // console.log("not login");
    }
  }, [updatedState]);
  return <>
   <header className="text-gray-400 bg-gray-900 bg-opacity-90 body-font">
  <div className="container mx-auto flex justify-center flex-wrap py-6 flex-row space-x-1">
  <div className="flex justify-center items-center mt-3">
    <Link to="/" className="flex title-font font-medium text-white mb-4 md:mb-0 items-center">
    <img alt="ecommerce" className="lg:w-12 w-12 lg:h-auto h-8 object-center" src={Logo} />
      <span className="ml-2 text-lg font-bold">TAPTECH</span>
    </Link>
    </div>
    {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center space-x-12">
      <Link to="/" className="font-bold cursor-pointer hover:text-white">Features</Link>
      <Link to="/" className="font-bold cursor-pointer hover:text-white">Founders</Link>
      <Link to="/" className="font-bold cursor-pointer hover:text-white">Products</Link>
      <Link to="/" className="font-bold cursor-pointer hover:text-white">Contact</Link>
    </nav> */}
    <div className='flex justify-center items-center space-x-4'>

    {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
      
    </button> */}
    {isLogin?(
    <Link to="/my-account" className="contact font-bold cursor-pointer hover:text-white">My Account</Link>

    ):(

    <Link to="/login" className="contact font-bold cursor-pointer hover:text-white">Login</Link>
    )}
    <Link to="/products" className="shadow-lg text-white inline-flex items-center bg-gradient-to-r from-[#BEA058] to-[#E0C670] border-0 py-1 px-1 focus:outline-none hover:bg-[#BEA058] rounded">BUY
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
    <li className="font-sans block mt-2 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-700">
  <Link to="/cart" role="button" className="relative flex">
    <div>
  <svg className="flex-1 w-12 h-12 fill-current" viewBox="0 0 24 24">
    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
  </svg>
  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
  </span>
</div>

  </Link>
</li>
    </div>
  </div>
</header>

  </>
}

export default MobileNav