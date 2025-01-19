import React from "react";

const Heading = ({logo , name , desc1 , desc2, text })=>{
    return(<>
     <div className="justify-center text-center items-center w-full py-5">
            <div className="text-center mb-3">
              <img className="text-center mx-auto" src={logo} />
              <p className="text-white font-bold ">{name}</p>
            </div>
            <div className="text-white font-bold md:text-4xl text-3xl mb-2 space-y-2">
              <p>{desc1}</p>
              <p>{desc2}</p>
            </div>
            <div ><p className="text-white text-base mb-10">{text}</p></div>
            <div className="space-x-4 space-y-3">
              <button className="rounded-3xl px-10 py-2 text-lg font-semibold border-white hover:bg-white hover:text-black text-white bg-transparent border-2 ">View Live Project</button>
              <button className="rounded-3xl px-10 py-2 text-lg font-semibold border-white hover:bg-white hover:text-black text-white bg-transparent border-2 ">Explore More Project</button>
            </div>
          </div>
    
    </>)
}

export default Heading ;