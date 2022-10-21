import React,{useEffect,useState} from 'react'
import {useMediaQuery} from 'use-media-size'
import Navbar from '../Layout/Navbar'
import MobileNav from '../Layout/MobileNav'
import Footer from '../Layout/Footer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

// import Reducer from '../Redux/Reducer'
// import State from '../Redux/state'

const Cart = () => {
  const {pathname} = useLocation()
  const Navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width:780px)')
  const {id} = useParams();
  const [product,setProduct] = useState({
    price:"",
    card_name:"",
    picture:"",
  })
  const [qty,setQty] = useState(1)
  const [cartData,setCartData] = useState({
    productId:"",qty:"",price:"",
  })
  const SearchProduct=async()=>{
    try{
      const res = await fetch(`${process.env.REACT_APP_API}/products/findProducts/${id}`)
      const data = await res.json()
      // console.log(data.data);
      setProduct(data.data);
    }catch(err){
      console.log(`error in carting products`,err);
    }
    
  }
  
  const postData=async()=>{
    const res = await fetch(`${process.env.REACT_APP_API}/products/cart/add-to-cart`,{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(cartData)
    })
    if(res.status===200){
      alert("added to cart")
      Navigate("/checkout")
    }else{
      Navigate(`/login?prevlocation=${pathname}`)
    }
  }
  useEffect(()=>{
    setCartData({productId:product._id,price:product.price,qty:qty})

  },[qty,product])
  
  useEffect(() => {
    // console.log(id);
    if(!id){
      Navigate("/products")
    }
    else{
      SearchProduct()
      // console.log(product);
    }
  }, []);

  return (
   <>
    {!isMobile?(<Navbar active="login" />):(<MobileNav/>)}
    {product?(
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto w-[80%]">
    <div className="lg:flex flex-wrap -m-4">
      <div className="p-4 lg:w-3/5 lg:flex bg-gray-800 bg-opacity-40 rounded-lg">
        <div className="h-full bg-opacity-40 px-8 pt-16 pb-24 overflow-hidden lg:w-2/3 flex items-center">
        <div>

          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-12">{product.card_name}</h1>
          <span className='text-2xl p-2 cursor-pointer' 
          onClick={
            ()=>{
              setQty(qty+1)
              setCartData({...cartData,qty:qty})
              }}>➕</span>
          <input min={1} readOnly type="number" value={qty} className="w-24" onChange={(e)=>{
          if(e.target.min<1){
            alert("Minimum value 1 required")
            Navigate(`/products`)
          }
          }}  />
          <span className='text-2xl p-2 cursor-pointer' 
          onClick={()=>{
            setQty(qty-1)
            setCartData({...cartData,qty:qty})
          }}>➖</span>
          <span className="title-font sm:text-2xl text-xl font-medium text-gray-300 mb-3"> Rs {product.price} /<b className='text-sm text-gray-400'>one time </b></span>
        </div>
          
          
          
        </div>
        <div className="h-full px-2 pt-2 pb-10 rounded-lg overflow-hidden lg:w-2/4 flex justify-center items-center">
        {product?(
          <img src={`${process.env.REACT_APP_API}/products/${product.picture}`} alt="card_image" className='' />  
        ):("loading..")}
        </div>
      </div>
      <div className="lg:p-4 p-2 lg:w-1/3 w-full">
        <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden">
          <h1 className="title-font sm:text-2xl text-2xl font-medium text-white mb-3">Cart</h1>
          <div className='flex lg:space-x-12 items-center'>

          <span className="leading-relaxed mb-3">plastic card name</span>
          <span className="leading-relaxed mb-3">{qty}x <b className='text-2xl'>RS {product.price}</b></span>
          <span className="w-2">X</span>
          </div>
          <hr/>
          <p className="text-white inline-flex items-center py-2">shipping will be calculated at checkout
          </p>
          <div className='flex space-x-28 items-center'>

          
          <span className="leading-relaxed mb-3">Total Price</span>
          <span className="leading-relaxed mb-3"><b className='text-2xl'>RS {product.price*qty}</b></span>
          </div>
          <button onClick={postData} className="flex justify-center w-full text-center mt-auto text-white bg-[#BEA058] border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 rounded">BUY NOW 
          </button>
          
        </div>
      </div>
    </div>
  </div>
</section>
    ):(
      <h1>Prducts not found</h1>
    )}
    
    


    <Footer />
   </>
  )
}

export default Cart