import React,{useState,useEffect} from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import {Link} from 'react-router-dom'
import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
//register plugin of filepond
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginFileValidateType)

const AllProducts = () => {
    const [isEdit,setisEdit] = useState(false)
    const [files, setFiles] = useState([])
    const [products,setProducts] = useState([])
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
    
    //adding data in data state
    const picHandler=(e)=>{
      console.log(data);
      setData({...data,picture:e[0].file})  
      setFiles(e)
    }
     const dataHandler= (e)=>{
        console.log(data);
        let name = e.target.name;
        let value = e.target.value;
        setData({
          ...data,[name]:value
        })  
      
  }
  const postData=async(e)=>{
    e.preventDefault();
        
    const formData = new FormData()
    const {id,prevPic,picture,card_name,description,price,status} = data
    
    formData.append("prevPic",prevPic)
    formData.append("picture",picture)
    formData.append("card_name",card_name)
    formData.append("description",description)
    formData.append("price",price)
    formData.append("type",status)
    formData.append("id",id)



        const res= await fetch(`${process.env.SERVER_API}/products/upload/`,{
          method:"PATCH",
          body: formData
        })
        console.log(res);
        if(res.status ===200){
          setisEdit(false)
          showProducts()
        }
        
    }
    const addNewProduct=()=>{
      setData({
        id:"",
        picture:"",
        card_name:"",
        description:"",
        price:"",
        status:"",
        prevPic:""
      })
      setisEdit(true)
    }

    // show product funtion 
    const showProducts =async()=>{
      
      try{
        const res = await fetch(`${process.env.SERVER_API}/products/`)
        const data =await res.json()
        if(res.status ===200){
          setProducts(data)
          // console.log("all products data coming",data);
          setIsLoading(false)
        }else{
          setIsLoading(false)
        }    
      }catch(err){
        console.log(`error he show produtct fucntion allproducts.jsx file me`,err);
      }
      }

    
      // finding products

    const findProduct=async(id)=>{
        const res = await fetch(`${process.env.SERVER_API}/products/findProducts/${id}`,{method:"GET"})
        const userData = await res.json()
        console.log("before",data);
        setData({
          ...data,
          card_name:userData.data.card_name,
          description:userData.data.description,
          price:userData.data.price,
          status:userData.data.status,
          id:userData.data._id,
          prevPic:userData.data.picture,
        })
        console.log("after",data);
    }
    const DeleteProduct=async(id)=>{
      try{

        const  res = await fetch(`${process.env.SERVER_API}/products/delete/${id}`,{method:"delete"})
        console.log(res);
        if(res.status === 200){
          await AllProducts()
        }
      }catch(err){
        console.log(`deleting product error ${err}`);
      }
    }
    useEffect(() => {
      showProducts()
    }, []);
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
    <button type="button" onClick={addNewProduct} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#BEA058] dark:hover:bg-[#b58a22] dark:focus:ring-[#b58a22]">Add new product</button>
  </div>
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
          Card Name
        </th>
        <th scope="col" className="py-3 px-6">
          Price
        </th>
        <th scope="col" className="py-3 px-6">
          Status
        </th>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
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
    <tbody>
    {
      products.map((data)=>{
        return <>
        
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
        <td className="p-4 w-4">
          <span className="flex items-center">
            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
          </span>
        </td>
        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src={`${process.env.REACT_APP_API}/products/${data.picture}`} alt="pic" />
          <p className="pl-3">
            <span className="text-base font-semibold">{data.card_name}</span>
            
          </p>  
        </th>
        <td className="py-4 px-6">
          {data.price} pkr
        </td>
        <td className="py-4 px-6">
          <p className="flex items-center">
            {/* <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" />  */}
            {data.status}
          </p>
        </td>
        <td className="py-4 px-6">
          {/* Modal toggle */}
          <button onClick={async()=>{
            
            await findProduct(data._id)
            setFiles([])
            setisEdit(true)}}
             type="button" data-modal-toggle="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button> / 
          <button onClick={()=>{DeleteProduct(data._id)}} 
            type="button" 
            data-modal-toggle="editUserModal" 
            className="font-medium text-blue-600 dark:text-red-700 hover:underline">Delete</button>
        </td>
      </tr>
        </>
      })
    }
    </tbody>
      </>
      )}
      
      
      
      
    
  </table>
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
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6">
              <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Display Picture (During update - upload new to change previous)</label>
              <div>
              <FilePond 
                files={files}
                onupdatefiles={picHandler}
                allowMultiple={false}
                allowFileTypeValidation={true}
                acceptedFileTypes={['image/jpeg','image/jpg','image/png']}
                maxFiles={1}
                name="picture"
                labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
              />
      </div>
            </div>
            {/* <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
              <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Green" required />
            </div> */}
            <div className="col-span-6 sm:col-span-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Card</label>
              <input onChange={dataHandler} value={data.card_name} type="text" name="card_name" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@company.com" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price (pkr)</label>
              <input onChange={dataHandler} value={data.price} type="number" name="price" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. 899" required />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
              <select onChange={dataHandler} value={data.status} required name="status" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="empty" default>---Active/pending---</option>
                <option value="active">Active</option>
                <option value="pending">Pending </option>
              </select>
             
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
              <textarea onChange={dataHandler} value={data.description} type="number" name="description" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Write something"} required />
            </div>
            
            
          </div>
        </div>
        {/* Modal footer */}
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button onClick={postData} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
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

export default AllProducts