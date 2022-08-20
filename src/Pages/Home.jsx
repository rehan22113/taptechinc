import React,{useEffect} from 'react'
import Navbar from '../Layout/Navbar'
import MobileNav from '../Layout/MobileNav'
import Footer from '../Layout/Footer'
import '../App.css'
// import {StickyContainer,Sticky} from 'react-sticky'
import NextSection from '../Components/NextSection'
import TapCard from '../utility/card1.png'
import FAQS from '../Components/FAQS'
import Features from '../Components/Features'
import Contact from '../Components/Contact'
import { useMediaQuery} from 'use-media-size'
import {motion,useAnimation,domAnimation,LazyMotion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  const isMobile = useMediaQuery('(max-width:680px)')
  const [ref, inView] = useInView();
  const control = useAnimation();
  const boxVariant={
    visible:{opacity:1}
    ,hidden:{opacity:0}
  }
  const imgVariant={
    visible:{x:0,opacity:1}
    ,hidden:{x:40,opacity:0}
    }
  
  

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
    <section className="bg-images bg-cover bg-no-repeat ">
    {!isMobile?(<Navbar active="home" />):(<MobileNav/>)}
    
    <div>
    <LazyMotion features={domAnimation}>
        <motion.div 
    transition={{duration:1}}
    ref={ref}
    initial="hidden"
      variants={boxVariant}
     animate={control}
     className="bg-gray-900 bg-opacity-90"
     >
        <section className="text-gray-400 body-font sm:h-[120vh]">
  <div className="container mx-auto flex pt-24 px-5 items-center justify-center flex-col">
    
    <div className="text-center lg:w-2/4 w-full">
      <h1 className="sm:text-7xl lg:7xl text-6xl mb-4 font-bold text-white">The Future of Business Cards</h1>
      <p className="leading-relaxed mb-8 text-2xl py-6">“Just Tap or Scan to share your contact, Website, Social Media with others, leave a great first impression with NFC-enabled TapTech Cards”</p>
      <p className="leading-relaxed mb-8 text-xl py-2">*No dedicated App required*</p>
      {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">BUY</button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Contact</button>
      </div> */}
    </div>
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imgVariant}
      animate={control}
      transition={{duration:1}}
    >
    <div className='flex items-center justify-center mx-auto'>
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={TapCard}/>
    </div>
    </motion.div>
   
  </div>
</section>

</motion.div>
</LazyMotion>
</div>
</section>
{/* Next Section */}

<NextSection/>


{/* Features */}
<section className="text-gray-600 body-font">
  <Features />
</section>

{/* Frequently Ask Question Section */}
<section className="text-gray-600 bg-gray-900 body-font shadow-md">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center justify-center sm:w-2/3">
    <div className="lg:flex-grow md:w-1/3 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-6xl text-4xl mb-4 font-medium text-white">Frequently Asked Questions
      </h1>
      <p className="mb-8 leading-relaxed">If you need further inquiry feel free to Contact us at admin@taptechltd.com</p>
    </div>
    <div className="sm:w-2/3">
     <FAQS />
    </div>
  </div>
</section>

{/* Contact us section */}
<Contact />
<Newsletter/>

<Footer />

    </>
  )
}

export default Home