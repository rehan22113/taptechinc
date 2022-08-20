import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'


const Users = () => {
    const [isEdit,setisEdit] = useState(false)
    const [isLoading,setIsLoading] =useState(true)
    const [data,setData] = useState({
        id:false,
        picture:"",
        card_name:"",
        description:"",
        price:"",
        status:"",
        prevPic:""
    })
    const [user,setUser] = useState([])

    const DeleteUser=async(id)=>{
       const res= await fetch(`user/delete/${id}`,{method:"delete"})
       const message = await res.json()
        if(res.status===200){
          alert(message.message)
        }
    }

    const FetchUsers =async()=>{
        try{

            const res = await fetch("/allusers",{method:"GET"})
            const users=await res.json()
            console.log(users.users)
            setUser(users.users)
            setIsLoading(false)
        }catch(err){
            console.log(err);
            setIsLoading(true)
        }
    }

    useEffect(() => {
      FetchUsers();
    }, [])
        
  return (
    <>
<div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-black'>
    <div className="h-full ml-10 mb-10 md:ml-60 md:px-16 px-4 py-16">
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
  <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800">
    <div>
      <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
        <span className="sr-only">Action button</span>
        Action
        <svg className="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {/* Dropdown menu */}
      <div id="dropdown" className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 hidden" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: 0, transform: 'translate3d(64.5px, 28px, 0px)'}} data-popper-reference-hidden data-popper-escaped data-popper-placement="top">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</Link>
          </li> 
        </ul>
        <div className="py-1">
          <Link to="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</Link>
        </div>
      </div>
    </div>
    <label htmlFor="table-search" className="sr-only">Search</label>
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
      </div>
      <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
      
    </div>
    {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#BEA058] dark:hover:bg-[#b58a22] dark:focus:ring-[#b58a22]">Add new product</button> */}
  </div>
  {isLoading?(
      <>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <g transform="rotate(0 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(30 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(60 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(90 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(120 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(150 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(180 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(210 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(240 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(270 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(300 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
    </rect>
  </g><g transform="rotate(330 50 50)">
    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#eca611">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
    </rect>
  </g>
</svg>


</>

    ):(
      <>
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
          </div>
        </th>
        <th scope="col" className="py-3 px-6">
          User Name
        </th>
        <th scope="col" className="py-3 px-6">
          email
        </th>
        <th scope="col" className="py-3 px-6">
          type
        </th>
        <th scope="col" className="py-3 px-6">
          Status
        </th>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
    
    <tbody>
        {
            user.map((user)=>{

          return <>
        
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
        <td className="p-4 w-4">
          <span className="flex items-center">
            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
          </span>
        </td>
        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
          
          
            <span className="text-base font-semibold">{user.userName.firstName} {user.userName.lastName}</span>
            
          
        </th>
        <td className="py-4 px-6">
          {user.email}
        </td>
        <td className="py-4 px-6">
          {user.isAdmin?"Admin":"Customer"}
        </td>
        <td className="py-4 px-6">
          <p className="flex items-center">
            {/* <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" />  */}
           <select name="status">
              <option select value="Pending" >Pending</option>
              <option value="Pending" >Verified</option>
           </select>
          </p>
        </td>
        <td className="py-4 px-6">
          {/* Modal toggle */}
          <button
              onClick={()=>{
                setisEdit(true)
              }}
             type="button" data-modal-toggle="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</button> / 
             {!user.isAdmin?(
          <button 
            onClick={DeleteUser(user._id)}
            type="button" 
            data-modal-toggle="editUserModal" 
            className="font-medium text-blue-600 dark:text-red-700 hover:underline">Delete</button>
             ):""}
        </td>
      </tr>
</>
    })
        }
     
    </tbody>
  </table>
      </>
      )}
      
      
      
      
    
  {/* Edit product modal */}
  {isEdit?(
    <div id="editUserModal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full flex" aria-modal="true" role="dialog">
    <div className="relative w-full max-w-2xl h-full md:h-auto">
      {/* Modal content */}
      <form action="#" className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Edit Card info
          </h3>
          <button onClick={()=>{setisEdit(false)}} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="editUserModal">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>  
          </button>
        </div>
        {/* Modal body */}
        <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>

          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                <div className="mt-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        autoComplete="family-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="street-address"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                      Apartment, suite, etc.
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="apartment"
                        id="apartment"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>United States</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                      Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="province"
                        id="province"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Order summary */}
            
          </form>
        </div>
      </main>
        {/* Modal footer */}
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
        </div>
      </form>
    </div>
  </div>
  ):""}
  

  {/* modal end */}
</div>
</div>
</div>


    </>
  )
}

export default Users