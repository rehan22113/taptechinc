import React,{useState,useEffect,Fragment} from 'react'
// import {ContextApi} from '../Context'
import { useMediaQuery} from 'use-media-size'
import Navbar from '../Layout/Navbar'
import MobileNav from '../Layout/MobileNav'
import Newsletter from '../Components/Newsletter'
import Footer from '../Layout/Footer'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const Navigate = useNavigate()
  

  const Addtocart =(id)=>{
    Navigate(`/cart/${id}`)
  }

  const showProducts =async()=>{
      
    try{
      const res = await fetch(`${process.env.REACT_APP_API}/products/`)
      console.log(process.env.REACT_APP_API)
      const data =await res.json()
      if(res.status ===200){
        setData(data)
        // console.log("all products data coming",data);
        setIsLoading(false)
      }else{
        setIsLoading(true)
      }    
    }catch(err){
      console.log(`error he show produtct fucntion allproducts.jsx file me`,err);
    }
    }
  const isMobile = useMediaQuery('(max-width:680px)')
  useEffect(() => {
    showProducts()
  }, []);
  return (
    <>
    {!isMobile?(<Navbar active="products" />):(<MobileNav/>)}

    {/* Products section */}
    <section className="text-gray-400 bg-gray-900 body-font">

  <div className="container px-5 py-24 mx-auto w-4/5">
    <h1 className="text-center sm:text-4xl text-white mb-12">Our Products</h1>
    <div className="flex flex-wrap -m-4 ">
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
    { data.map((data,index)=>{
      return (<Fragment key={data._id}>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden p-2">
          <img className="lg:h-60 md:h-36 w-full object-cover object-center" src={`https://taptechinc-REACT_APP.herokuapp.com/products/${data.picture}`} alt="blog" />
          <div className="p-6">
            
            <h1 className="title-font text-2xl font-medium text-white mb-3">{data.card_name}</h1>
            <p className="leading-relaxed mb-3">{data.description}</p>
            <div className="flex items-center flex-wrap ">
            <button onClick={()=>Addtocart(data._id)} className="flex items-center mt-auto text-white bg-[#BEA058] border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 rounded">Add to Cart
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

              <span className="text-white text-2xl mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 py-1 border-r-2 border-gray-800">
                {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>*/}
                <abbr title='One-time Price'>{data.price} pkr </abbr>
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg> <abbr title='Reviews'>6</abbr>
              </span>
            </div>
        <div className="h-full py-6 rounded-lg flex flex-col relative overflow-hidden" key={data._id}>
            
            <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                </span>NFC/RFID Enabled
            </p>
            <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                </span>QR Code for older phones
            </p>
            <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                </span>Works with Apple and Android
            </p>
            <p className="flex items-center text-gray-400 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                </span>No monthly Fees
            </p>
            <p className="flex items-center text-gray-400 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                </span>Ships within 48hrs
            </p>
            {/* <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Button
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button> */}
            <p className="text-xs text-gray-400 mt-3">Literally you probably haven't heard of this deal .</p>
            </div>

          </div>
        </div>
      </div>
      </Fragment>)
    }
    )}
    </>
    )}
      
      
    </div>
  </div>
</section>

<Newsletter />
    <Footer />

        
    </>
  )
}

export default Products