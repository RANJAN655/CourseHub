import React from 'react'
import { Link } from 'react-router-dom';
import Rakes from '../../assets/Rakes.jpg'
import Side from "../../assets/Side.jpg"
import Card from './Card';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const carousel = document.getElementById("#carousel");
    if (carousel) {
      // duplicate all items for smooth infinite scroll
      carousel.innerHTML += carousel.innerHTML;
    }
  }, []);

    return (
      
      <div className='w-[100vw] h-[auto] bg-white  relative '>
    

      <div className=' w-[100vw] absolute  top-[16vh]'>

      <Card/>
     </div>



      <div className=" gap-1 w-[100vw] h-[10vh]  flex  justify-center items-center">
        <img src={Side} alt="image"
        className='w-[8vw] object-cover h-[8vh] rounded-2xl '
        />
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite ;
          }
      `}</style>

      <div className=" w-[81vw] h-[9vh] flex justify-center items-center  overflow-x-hidden rounded-lg overflow-y-hidden select-none ">
        <div
          id="carousel"
          className="flex w-[100%] h-[80%] max-md:h-[60%] border-amber-600 justify-center items-center animate-scroll">


          <div className=" max-md:text-[15px] bg-[radial-gradient(circle,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)]
          flex-none w-[60%] h-[100%] m-2  rounded-lg flex items-center justify-center text-2xl font-bold font-serif ">
            Welcome to CourseHub
          </div>

          <div className=" font-sans flex-none  max-md:text-[15px] w-[80%] h-[100%] m-2  rounded-lg flex items-center justify-center text-2xl font-bold 
          bg-gradient-to-r from-[#8e3dba] via-[#fd1d1d] via-70% to-[#fcb045]
          ">
            50% off on in python course
          </div>

          <div className="font-sans flex-none max-md:text-[15px] w-[80%] h-[100%] m-2  rounded-lg flex items-center justify-center text-2xl font-bold
          bg-[radial-gradient(circle,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)]
          ">
            Diwali special AI and ML course
          </div>
          <div className="font-sans flex-none max-md:text-[15px]  w-[80%] h-[100%] m-2  rounded-lg flex items-center justify-center text-2xl font-bold
          bg-gradient-to-t from-[#22c1c3] to-[#fdbb2d]
          ">
            Check out our gurantee pacement course
          </div>
          <div className="font-sans flex-none w-[80%] max-md:text-[15px] h-[100%] m-2  rounded-lg flex items-center justify-center text-2xl font-bold
          bg-[radial-gradient(circle,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)]
          ">
            Teachers from Google and Zepto 
          </div>
        </div>
      </div> 


      <img src={Side} alt="image"
        className='w-[8vw] object-cover h-[8vh] rounded-2xl mr-2'
        />

    </div>


     <div className='w-full max-md:h-[300px] h-[570px] grow-1 shrink-1 basis-auto '>
      <img src={Rakes} alt="image" 
      className='object-cover max-md:mt-[220px] w-full mt-[420px] h-full '
      /> 
     
     </div>


     

    




   </div>

    ) 
  }  