import React from "react";
import pro1 from "../assets/HomePg_img/pro1.png"
import pro2 from "../assets/HomePg_img/pro2.png"
import pro3 from "../assets/HomePg_img/pro3.png"
import BuildYourAwesomePlatforn from "../components/BuildYourAwesomePlatform";
import WriteToAs from "../components/HomePg/WriteToAs";


const PortfolioPg = () => {
    return (<>
        <div className="md:ml-10 md:mr-10">

            {/* Portfolio heading */}
            <div className="flex  justify-center text-center">
                <div>
                    <p className="font-inter font-semibold text-5xl my-4 ">Portfolio </p>
                    <div className=" flex justify-center">
                        <div className="md:w-3/5 w-4/5 text-center">

                            <p className="font-inter text-xs md:text-base opacity-50  "> lorem ipsum is a filler text commonly used to demonstrate the graphic elements of a document or visual presentation. Replacing meaningful content that could be distracting with placeholder text may allow viewers to focus on graphic aspects such as font, typography, and page layout</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-20">
                <div className="grid grid-flow-row gap-8">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro1} className="w-72 h-64" />
                        </div>
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro2} className="w-72 h-64" />
                        </div>
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro3} className="w-72 h-64" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro3} className="w-72 h-64" />
                        </div>
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro1} className="w-72 h-64" />
                        </div>
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro2} className="w-72 h-64" />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro2} className="w-72 h-64" />
                        </div>
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro3} className="w-72 h-64" />
                        </div>
                        <div className="w-full h-72 bg-black rounded-xl flex justify-center items-center">
                            <img src={pro1} className="w-72 h-64" />
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

export default PortfolioPg;