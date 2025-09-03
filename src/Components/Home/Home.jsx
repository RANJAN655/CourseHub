import React from 'react'
// import { Link } from 'react-router-dom';
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
      <div className='w-screen h-full bg-white'>



      <div className=" w-screen h-[100px]  flex  justify-center items-center  gap-2">
        <img src="./src/assets/stock-vector-promoting-selling-art-and-craft-online-in-social-media-concept-artists-artisans-advertising-2274816353.jpg" alt="image"
        className='w-[150px] object-cover h-[80px] rounded-2xl '
        />
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
      `}</style>

      <div className=" w-[1200px] h-[80px] flex justify-center items-center gap-2 overflow-x-hidden rounded-lg overflow-y-hidden ">
        <div
          id="carousel"
          className="flex w-max animate-scroll justify-center items-center animate-scroll"
        >
          <div className="bg-[radial-gradient(circle,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)]
          flex-none w-[1000px] h-[60px] m-2  rounded-lg flex items-center justify-center text-2xl font-bold">
            Welcome to CourseHub.com
          </div>
          <div className="flex-none w-[200px] h-[150px] m-2 bg-blue-200 rounded-lg flex items-center justify-center text-2xl font-bold">
            2
          </div>
          <div className="flex-none w-[200px] h-[150px] m-2 bg-blue-200 rounded-lg flex items-center justify-center text-2xl font-bold">
            3
          </div>
          <div className="flex-none w-[200px] h-[150px] m-2 bg-blue-200 rounded-lg flex items-center justify-center text-2xl font-bold">
            4
          </div>
          <div className="flex-none w-[200px] h-[150px] m-2 bg-blue-200 rounded-lg flex items-center justify-center text-2xl font-bold">
            5
          </div>
        </div>
      </div>


      <img src="./src/assets/stock-vector-promoting-selling-art-and-craft-online-in-social-media-concept-artists-artisans-advertising-2274816353.jpg" alt="image"
        className='w-[150px] object-cover h-[80px] rounded-2xl '
        />

    </div>



    <img src="./src/assets/stock-vector-business-seminar-lecture-expert-speaking-at-office-workshop-speaker-and-employees-meeting-at-2402954755.jpg" alt="" 
    className='object-cover my-4 h-auto w-auto block ml-4   mt-[200px]'
    />




   </div>

    ) 
  }  