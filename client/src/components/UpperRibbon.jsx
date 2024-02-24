import React from "react";
import { BackgroundGradientAnimation } from "./ui/BgGradient";

const UpperRibbon = () => {
  return (
    <div
      className="dotted relative 
     w-full  h-10"
    >
      <BackgroundGradientAnimation />

      <h2 className="absolute text-white font-semibold top-1 left-[45%]">Beta Version <span className='text-purple-500 text-[1.1rem]'>1.0</span></h2>

      {/* <div className='bg-black/70 text-white blur-lg text-center h-40 w-[76%] mx-auto'>
      <h1 className='text-3xl text-white'>hii</h1>
    </div> */}
    </div>
  );
};

export default UpperRibbon;
