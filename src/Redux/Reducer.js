const Reducer = (state,action) =>{
    switch (action.type){
        case "LOGGEDIN":{
            console.log(action);
            return ({...state,isLoggedin:action.isLoggedin,userData:action.userData})
        }
        default:{
            return state
        }
    }
}

export default Reducer