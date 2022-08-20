import React,{createContext, useReducer} from 'react'
import Reducer from "./Redux/Reducer"
import State from './Redux/state'
const ContextApi = createContext()

const Context = ({children}) => {
  const [updatedState,dispatch] = useReducer(Reducer,State)

  // Check user is logged in?
    const LogIn=async()=>{

      const res = await fetch("/checkuser",{method:"GET",headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }})
      const userData = await res.json()
      // console.log("context",userData);
    if(res.status===200){
      await dispatch({type:"LOGGEDIN",isLoggedin:true,userData})
    }
    // console.log("responce",updatedState);
    }
  // call user logot Api
const Logout=async()=>{
  try{
    dispatch({type:"LOGGEDIN",isLoggedin:false})
  }
  catch(err){
    console.log("logout error",err);
  }
}
// useEffect(() => {
//   LogIn() 
// }, []);
  return (
    <ContextApi.Provider value={{updatedState:updatedState.isLoggedin,LogIn,Logout,userData:updatedState.userData}} >
        {children}
    </ContextApi.Provider>
  )
}

export default Context
export {ContextApi}