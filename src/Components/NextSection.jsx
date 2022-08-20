import React,{useEffect} from 'react'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import FounderClub from '../utility/founder_club.png'

const NextSection = () => {

  const [ref, inView] = useInView();
  const control = useAnimation();
  // const boxVariant={
  //   visible:{opacity:1}
  //   ,hidden:{opacity:0}
  // }
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
        <section className="text-gray-400 bg-slate-50 body-font lg:py-16 py-8 sm:py-16">
  <div className="container mx-auto flex sm:px-5 md:py-24 md:flex-row flex-col items-center sm:w-2/3 w-4/5">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-bold sm:text-4xl text-3xl mb-4 text-[#BEA058]">Save Time and Money – Greet Professionally readymade gluten
      </h1>
      <p className="mb-8 font-bold leading-relaxed">Compatible with all modern samrtphones, Apple and Android.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#BEA058] border-0 sm:py-2 py-2 px-3 sm:px-6 focus:outline-none hover:bg-[#E0C670] rounded text-lg">Contact US</button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Make A Deal</button>
      </div>
    </div>
    
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imgVariant}
      animate={control}
      transition={{duration:1}}
    >
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={FounderClub} />
    </div>
    </motion.div>
  </div>
</section>
    </>
  )
}

export default NextSection