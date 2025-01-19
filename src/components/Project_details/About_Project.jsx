import React from "react";

const About_Project = ({Pro_desc , image1 , name1 , image2 , name2, image3 , name3, image4 , name4 })=>{
    return(<>

     <div className="  mb-20   md:mx-20 mx-2  rounded-2xl my-32 ">
            <div className=" text-center mb-8">
              <p className="font-bold text-4xl text-white mb-5">ABOUT THE PROJECT</p>
              <p className="text-white md:text-xl text-base md:px-16 px-3">{Pro_desc}</p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-4 text-center py-5 gap-12 justify-center">
  <div className="flex flex-col items-center">
    <img className="w-28" src={image1} />
    <div className="w-full">
      <p className="text-white mt-2">{name1}</p>
    </div>
  </div>
  <div className="flex flex-col items-center">
    <img className="w-28" src={image2} />
    <div className="w-full">
      <p className="text-white mt-2">{name2}</p>
    </div>
  </div>
  <div className="flex flex-col items-center">
    <img className="w-28" src={image3} />
    <div className="w-full">
      <p className="text-white mt-2">{name3}</p>
    </div>
  </div>
  <div className="flex flex-col items-center">
    <img className="w-28" src={image4} />
    <div className="w-full">
      <p className="text-white mt-2">{name4}</p>
    </div>
  </div>
</div>

          </div>
    
    </>)
}

export default About_Project;