import React from "react";

const Clint_say = ({ClintImg , ClintName, Detail, Message})=>{
    return(<>
    
         <div className="mb-8"><p className="text-4xl font-bold text-white text-center">WHAT OUR CLIENT SAY</p></div>
        
              <div className="bg-white rounded-xl mx-32 py-5 flex md:grid md:grid-flow-col mb-40">
                <div className="p-5 w-[300px] text-center">
                  <img className="w-56 mb-5 mx-auto" src={ClintImg} />
                  <p className="text-lg font-semibold">{ClintName}</p>
                  <p className="text-lg font-semibold text-orange-300" >{Detail}</p>
                </div>
                <div className="h-60 my-auto mx-5 border-l-2 w-1 border-gray-500"></div>
        
                <div className="my-auto w-auto px-14 ">
                  <p className="text-lg mb-5" >{Message}</p>
                  <div className="w-full text-end "><p className="text-lg font-semibold">{ClintName}</p></div>
                </div>
              </div>

    </>)
}

export default Clint_say ;