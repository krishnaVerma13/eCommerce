import React from "react";
import Sir_img3 from "../assets/HomePg_img/Naman-img3.png"
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import BuildYourAwesomePlatforn from "../components/BuildYourAwesomePlatform";
import WriteToAs from "../components/HomePg/WriteToAs";

const AboutPg = () => {
    return (<>
        <div className="md:ml-20  md:mr-20">

            {/* About us  */}
            <div className="flex  justify-center text-center">
                <div>
                    <p className="font-inter font-semibold text-5xl my-4 ">About Us </p>
                    <div className=" flex justify-center">
                        <div className="md:w-3/5 w-11/12 text-center">

                            <p className="font-inter text-xs md:text-base opacity-50  ">I am a passionate frontend developer and project manager with a knack for creating intuitive and aesthetic web interfaces. With a focus on detail and user experience, I bring projects to life through seamless collaboration and efficient management  I bring projects to life through seamless collaboration and efficient management</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Naman sir image */}
            <div className="flex justify-center my-10">
                <img src={Sir_img3} className="md:w-2/5 w-4/5 relative bottom-20" />
            </div>


            <div className="grid md:grid-flow-col grid-flow-row  space-x-">
                <div className="md:w-3/4 mx-5">

                    <div className="w-4/5">
                        <p className="font-poppins font-semibold text-2xl md:text-3xl">Naman Educational Milestones and Achievements</p>
                    </div>
                    <div className="w-3/4 ">
                        <p className="font-poppins text-xs ">Naman jaiswa completed his MCA degree with excellence. His educational journey laid a strong foundation for his career in design.</p>
                    </div>
                </div>
                <div className="flex m-5">
                    <div className="flex items-center justify-center h-full">
                        <div className="relative h-full w-0.5 bg-black">
                            {/* Circle 1 */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-500 rounded-full"></div>

                            {/* Circle 2 */}
                            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-500 rounded-full"></div>

                            {/* Circle 3 */}
                            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-500 rounded-full"></div>


                        </div>
                    </div>

                    <div className="ml-14 ">
                        <div className="font-poppins mb-5 ">
                            <p className="font-semibold text-3xl">2024</p>
                            <p className="text-xl">MCA Degree Completed</p>
                            <div className="w-3/4">
                                <p className="text-xs opacity-50"> lorem ipsum is a filler text commonly used to demonstrate the graphic elements of a document or visual presentation. Replacing meaningful content that could be distracting with placeholder text may allow viewers to focus on graphic aspects such as font, typography, and page layout</p>
                            </div>
                        </div>

                        <div className="font-poppins mb-6">
                            <p className="font-semibold text-3xl">2018</p>
                            <p className="text-xl">Bachelor's Degree Achieved</p>
                            <div className="w-3/4">
                                <p className="text-xs opacity-50">  lorem ipsum is a filler text commonly used to demonstrate the graphic elements of a document or visual presentation. Replacing meaningful content that could be distracting with placeholder text may allow viewers to focus on graphic aspects such as font, typography, and page layout</p>
                            </div>
                        </div>

                        <div className="font-poppins mb-10 ">
                            <p className="font-semibold text-3xl">2016</p>
                            <p className="text-xl">High School Graduation</p>
                            <div className="w-3/4">
                                <p className="text-xs opacity-50"> lorem ipsum is a filler text commonly used to demonstrate the graphic elements of a document or visual presentation. Replacing meaningful content that could be distracting with placeholder text may allow viewers to focus on graphic aspects such as font, typography, and page layout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <BuildYourAwesomePlatforn
                Color="#F9B402"
            />

            <WriteToAs />


        </div>
        <div className="bg-black w-full h-96"></div>
    </>)
}

export default AboutPg;