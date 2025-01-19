import React from "react";

const Contribution = () => {
  return (<>

    <div className="mb-8">
      <p className="text-4xl font-bold text-white text-center">OUR CONTRIBUTION</p>
    </div>

    <div className="mb-20 mx-6 sm:mx-32 px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="px-5 my-16">
        <p className="font-bold text-white text-2xl text-center mb-10">PROBLEM</p>
        <div className="w-full">
          <p className="text-white text-base">
            “Promotional sales are critical for any e-commerce platform, but they come with their own challenges. The sudden surge in users during these events puts immense pressure on the platform, leading to slow page load times, laggy user interactions, and in some cases, complete crashes. For PetCare, a platform built to cater to pet owners with essential supplies and services, these issues could result in abandoned carts, dissatisfied customers, and lost revenue”
          </p>
        </div>
        <a href="" className="text-base text-white sm:text-lg font-semibold block text-right mt-4 underline">
          Read more
        </a>
      </div>

      <div className="px-2 my-16">
        <p className="font-bold text-white text-2xl text-center mb-10">SOLUTION</p>
        <p className="text-white text-base">
          “To address these challenges, we engineered a scalable backend architecture specifically designed to adapt to unpredictable traffic conditions while maintaining peak performance and reliability. Recognizing that even a brief delay or system lag during promotional sales could lead to abandoned carts and frustrated users, we focused on creating a solution that would not only handle traffic surges but also provide a seamless, uninterrupted shopping experience for every customer”
        </p>
        <a href="" className="text-base text-white sm:text-lg font-semibold block text-right mt-4 underline">
          Read more
        </a>
      </div>
    </div>


  </>)
}

export default Contribution;