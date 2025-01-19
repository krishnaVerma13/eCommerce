import React from "react";

const BuildYourAwesomePlatform = (prop) => {
    return (<>
        <div
  className={`flex justify-center items-center mx-4 md:mx-10 h-auto md:h-64 bg-[${prop.Color}] shadow-2xl  text-white my-16 md:my-32 p-6 md:p-0`}
>
  <div className="text-center">
    <p className="text-2xl md:text-4xl mb-4 font-inter">
      Build your Awesome Platform
    </p>
    <div className="flex justify-center">
      <div className="w-full md:w-3/5 mb-6">
        <p className="font-inter text-sm text-white">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for
          those of you who use our services.
        </p>
      </div>
    </div>
    <div className="flex justify-center">
      <button className="bg-white text-black py-2 px-8 font-semibold rounded-full flex justify-center items-center">
        Contact Now
      </button>
    </div>
  </div>
</div>


    </>)
}

export default BuildYourAwesomePlatform;