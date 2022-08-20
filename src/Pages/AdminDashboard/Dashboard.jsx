import React,{useEffect,useContext,useState} from 'react'
import '../../utility/DashboardStyle.css'
import {Outlet, useNavigate,Link} from 'react-router-dom'
import { ContextApi } from '../../Context'

// import Main from '../../Components/Admin/Main'
const Dashboard = () => {
  const Navigate = useNavigate()
  const {LogIn,Logout,userData} = useContext(ContextApi)
  const [user,setUser] = useState("profile_picture-1658114139218.png")
  
  const isLogout=async()=>{
    try{
      const res = await fetch("/user/logout")
      if(res.status === 200){
        await Logout()
        Navigate("/login")
      }
    }catch(err){
      console.log("logout error",err);
    }
    }
    const LogUser = async()=>{
      try{
        const res = await fetch("/dashboard",{method:"GET",headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        }})
        // console.log("Dashboard",res.status);
        if(res.status===200){
          await LogIn()
          // console.log("setting",user);
        }else{
          Navigate("/login")
        }
        setUser(userData.user.picture)
      }catch(err){
        console.log("Dashboard login error",err);
      }
    }
    useEffect(()=>{
      LogUser()
    },[])


    

  return (
    <>

<div>
  <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
    {/* Header */}
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-[#BEA058] dark:bg-gray-800 border-none">
      {userData?(<img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src={`http://localhost:8070/picture/${user}`} alt='avatar' />):(
        <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="http://picsum.photos/200" alt='avatar' />
      )}
        
        <span className="hidden md:block">ADMIN</span>
      </div>
      <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
      <Link to="/" className='w-10'>
          <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 50 50">
  <path style={{lineHeight: 'normal', textIndent: 0, textAlign: 'start', textDecorationLine: 'none', textDecorationStyle: 'solid', textDecorationColor: '#ffff', textTransform: 'none', blockProgression: 'tb', isolation: 'auto', mixBlendMode: 'normal'}} d="M 25 2 C 14.393 2 5.4448281 9.219 2.7988281 19 L 4.8847656 19 C 5.6328266 16.497895 6.8461316 14.19903 8.40625 12.181641 C 10.11406 13.14443 12.090106 13.948645 14.275391 14.568359 C 13.911382 15.968817 13.609625 17.444852 13.398438 19 L 15.4375 19 C 15.640372 17.623905 15.917299 16.310659 16.246094 15.0625 C 18.65626 15.593995 21.26261 15.908369 24 15.970703 L 24 19 L 26 19 L 26 15.970703 C 28.73717 15.908394 31.344238 15.595715 33.753906 15.064453 C 34.082484 16.312076 34.359726 17.624574 34.5625 19 L 36.601562 19 C 36.390375 17.444852 36.088618 15.968817 35.724609 14.568359 C 37.910217 13.948621 39.88593 13.144757 41.59375 12.181641 C 43.153868 14.19903 44.367173 16.497895 45.115234 19 L 47.201172 19 C 44.555172 9.219 35.607 2 25 2 z M 24 4.1210938 L 24 13.970703 C 21.457648 13.908488 19.039992 13.615506 16.814453 13.132812 C 18.455473 8.2130227 21.061735 4.7680112 24 4.1210938 z M 26 4.1210938 C 28.938265 4.7680112 31.544527 8.2130227 33.185547 13.132812 C 30.960235 13.615544 28.542479 13.908471 26 13.970703 L 26 4.1210938 z M 19.132812 4.8535156 C 17.372476 6.7092307 15.898463 9.3908698 14.835938 12.640625 C 12.923892 12.100179 11.200803 11.419694 9.7226562 10.626953 C 12.255659 7.9327561 15.491247 5.9172327 19.132812 4.8535156 z M 30.867188 4.8535156 C 34.508753 5.9172327 37.744341 7.9327561 40.277344 10.626953 C 38.799465 11.419826 37.07607 12.100095 35.164062 12.640625 C 34.101537 9.3908698 32.627524 6.7092307 30.867188 4.8535156 z M 3 21 L 5.5390625 29 L 7.8691406 29 L 9.9824219 23.019531 L 12.101562 29 L 14.380859 29 L 16.964844 21 L 14.800781 21 L 13.167969 26.587891 L 11.302734 21 L 8.7480469 21 L 6.8027344 26.494141 L 5.1992188 21 L 3 21 z M 18.017578 21 L 20.558594 29 L 22.888672 29 L 25 23.019531 L 27.119141 29 L 29.398438 29 L 31.982422 21 L 29.818359 21 L 28.185547 26.587891 L 26.320312 21 L 23.765625 21 L 21.820312 26.494141 L 20.216797 21 L 18.017578 21 z M 32.982422 21 L 35.533203 29 L 37.871094 29 L 39.992188 23.019531 L 42.119141 29 L 44.40625 29 L 47 21 L 44.828125 21 L 43.189453 26.587891 L 41.318359 21 L 38.753906 21 L 36.800781 26.494141 L 35.189453 21 L 32.982422 21 z M 2.7988281 31 C 5.4448281 40.781 14.393 48 25 48 C 35.607 48 44.555172 40.781 47.201172 31 L 45.115234 31 C 44.367173 33.502105 43.153868 35.80097 41.59375 37.818359 C 39.88594 36.85557 37.909894 36.051355 35.724609 35.431641 C 36.088656 34.031183 36.390375 32.555148 36.601562 31 L 34.5625 31 C 34.359467 32.376095 34.082771 33.689341 33.753906 34.9375 C 31.34374 34.406005 28.73739 34.091631 26 34.029297 L 26 31 L 24 31 L 24 34.029297 C 21.26283 34.091606 18.655762 34.404285 16.246094 34.935547 C 15.917516 33.687924 15.640274 32.375426 15.4375 31 L 13.398438 31 C 13.60977 32.555058 13.911304 34.031254 14.275391 35.431641 C 12.089783 36.051379 10.11407 36.855243 8.40625 37.818359 C 6.8461316 35.80097 5.6328266 33.502105 4.8847656 31 L 2.7988281 31 z M 24 36.029297 L 24 45.878906 C 21.061735 45.231989 18.455473 41.786977 16.814453 36.867188 C 19.039765 36.384456 21.457521 36.091529 24 36.029297 z M 26 36.029297 C 28.542352 36.091512 30.960008 36.384494 33.185547 36.867188 C 31.544393 41.786977 28.938173 45.231989 26 45.878906 L 26 36.029297 z M 14.837891 37.359375 C 15.900624 40.60913 17.372569 43.290769 19.132812 45.146484 C 15.491247 44.082767 12.255659 42.067244 9.7226562 39.373047 C 11.201001 38.579924 12.925162 37.899985 14.837891 37.359375 z M 35.164062 37.359375 C 37.076108 37.899821 38.799197 38.580306 40.277344 39.373047 C 37.744341 42.067244 34.508753 44.082767 30.867188 45.146484 C 32.627628 43.290695 34.101411 40.609306 35.164062 37.359375 z" fontWeight={400} fontFamily="sans-serif" white-space="normal" overflow="visible" />
</svg>

          </Link>



        <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
          
          <button className="outline-none focus:outline-none">
            <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <input type="search" name id placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
        </div>
        <ul className="flex items-center">
          <li>
            <button aria-hidden="true" className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none">
              <svg x-show="isDark" width={24} height={24} className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <svg x-show="!isDark" width={24} height={24} className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </li>
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700" />
          </li>
          <li>
            <button onClick={isLogout} className="flex items-center mr-4 hover:text-blue-100">
              <span className="inline-flex mr-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
    {/* ./Header */}
    {/* Sidebar */}
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
            </div>
          </li>
          <li>
            <Link to="/dashboard/main" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#BEA058] dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="products" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#BEA058] dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Products</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">New</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#BEA058] dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Messages</span>
            </Link>
          </li>
          <li>
            <Link to="orders" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-[#BEA058] dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Order Alert</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">3</span>
            </Link>
          </li>
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
            </div>
          </li>
          <li>
            <Link to="profile" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="users" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">All User</span>
            </Link>
          </li>
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2022</p>
      </div>
    </div>
    {/* ./Sidebar */}

      <Outlet />
  </div>
</div>
   

  
    </>
  )
}

export default Dashboard