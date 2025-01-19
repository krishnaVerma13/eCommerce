import React from "react";
import Aero from "../assets/HomePg_img/Vector_79.png"
import { FaDropbox } from "react-icons/fa";
import { SiClickup } from "react-icons/si";
import { SiPaychex } from "react-icons/si";
import { TbBrandElastic } from "react-icons/tb";
import { FaStripe } from "react-icons/fa";
import { WiDirectionUpRight } from "react-icons/wi";
import S1 from "../assets/HomePg_img/ServiceIcon1.png"
import S2 from "../assets/HomePg_img/ServiceIcon2.png"
import S3 from "../assets/HomePg_img/ServiceIcon3.png"
import Sir_img1 from "../assets/HomePg_img/Naman_img1.png"
import Sir_img2 from "../assets/HomePg_img/Naman_Img2.png"
import Pawsitive from "../assets/ImageAndIcons/PawsitiveIMG.png"
import UrbanStudio from "../assets/ImageAndIcons/urbanStudioIMG.png"
import JesicaFlat from "../assets/ImageAndIcons/jasicaflatIMG.png"
import SolarCRM from "../assets/ImageAndIcons/solarCRmIMG.png"
import { useNavigate } from "react-router-dom";
import BuildYourAwesomePlatforn from "../components/BuildYourAwesomePlatform";
import payIco from "../assets/HomePg_img/paychex.png"
import strIco from "../assets/HomePg_img/stripe.png"
import WriteToAs from "../components/HomePg/WriteToAs";


const HomePg = () => {

    const navigate = useNavigate();

    const redirect = (count) => {
        switch (count) {
            case 1:
                navigate("/petcare_det")
                break;
            case 3:
                navigate("/jassica_det")
                break;

            case 2:
                navigate("/urban_det")
                break;
            case 4:
                navigate("/urban2_det")
                break;

            default:
                break;
        }
    };

    return (<>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0">
                {/* Left Section */}
                <div className="md:ml-14 ml-5 mt-5 md:mt-32">
                    <p className="font-segoeScript text-2xl md:text-3xl">Hi, I'm</p>
                    <p className="font-poppins text-4xl md:text-6xl font-semibold">Naman Jaiswal</p>
                    <p className="font-poppins text-xl md:text-3xl">
                        Frontend Developer & Project Manager
                    </p>
                    <div className="md:w-5/12 w-3/4 mt-2">
                        <p className="font-poppins text-sm text-gray-400">
                            Creating visually stunning and user-friendly web experiences while
                            ensuring seamless project delivery.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center my-4">
                        <div className="flex space-x-4 md:space-x-10">
                            <button className="text-xs md:text-base font-poppins border border-black hover:bg-[#F9B402] hover:text-white text-black py-2 px-3 md:px-6 rounded-full hover:border-[#F9B402]">
                                View My Work
                            </button>
                            <button className="text-xs md:text-base font-poppins border border-black hover:bg-[#F9B402] hover:text-white text-black py-2 px-3 md:px-6 rounded-full hover:border-[#F9B402]">
                                Let's Collaborate
                            </button>
                        </div>
                        <img
                            src={Aero}
                            className="md:w-24 w-10 h-10 md:h-14 mx-6 mt-4 md:mt-0"
                            alt="Aero"
                        />
                    </div>
                    <p className="font-poppins ml-0 md:ml-5">510+ Trusted Members</p>
                </div>

                {/* Right Section */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={Sir_img2}
                        className="w-4/5 md:w-3/4 relative  md:bottom-18"
                        alt="Naman Jaiswal"
                    />
                </div>
            </div>



            <div className="md:mx-14 mx-5 md:my-32">
                {/* Worked with */}
                <div className="my-10">
                    <p className="text-xs font-semibold my-4">Worked With</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                        <div className="flex justify-center items-center border w-36 py-4 text-center border-black rounded-lg">
                            <SiClickup className="text-[#535353] text-sm" />
                            <p className="text-[#535353] font-bold">Clickup</p>
                        </div>
                        <div className="flex justify-center items-center border w-36 py-4 text-center border-black rounded-lg">
                            <FaDropbox className="text-[#535353] text-sm" />
                            <p className="text-[#535353] font-bold">Dropbox</p>
                        </div>
                        <div className="flex justify-center border w-36 py-4 text-center border-black rounded-lg">
                            <img src={payIco} className="w-20 h-4 flex justify-center items-center" />
                            {/* <SiPaychex className="text-[#535353] text-xl" /> */}
                        </div>
                        <div className="flex justify-center items-center border w-36 py-4 text-center border-black rounded-lg">
                            <TbBrandElastic className="text-[#535353] text-sm" />
                            <p className="text-[#535353] font-bold">elastic</p>
                        </div>
                        <div className="flex justify-center items-center border w-36 py-4 text-center border-black rounded-lg">
                            <img src={strIco} className="w-14" />
                            {/* <p className="text-[#535353] font-bold"><FaStripe /></p> */}
                        </div>
                    </div>
                </div>


                {/* Build your Awesome Platform */}
                <div className="flex justify-center items-center w-full md:h-64 h-96 rounded-xl md:rounded-none bg-black text-white my-20">
                    <div className="text-center">
                        <p className="text-4xl mb-4 font-inter mx-3">Build your Awesome Platform</p>
                        <div className="flex justify-center">
                            <div className="md:w-3/5 w-11/12 mb-6 ">
                                <p className="font-inter text-sm text-gray-400">Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-white text-black py-2 px-8 font-semibold rounded-full flex justify-center items-center ">Our Services <WiDirectionUpRight className="text-2xl" /></button>
                        </div>
                    </div>
                </div>



                {/* About AS */}
                <div className="grid md:grid-flow-col grid-flow-row">
                    {/* image */}
                    <div className=" flex justify-center ">
                        <img src={Sir_img1} className="w-11/12" />
                    </div>
                    {/* text  */}
                    <div className="flex items-center justify-center ">
                        <div className="md:ml-20 text-center md:text-start">
                            <p className="font-inter text-4xl font-semibold md:mt-32 mt-5">About As</p>
                            <div className="flex justify-center md:justify-start my-5 md:my-0 ">
                                <div className="md:w-3/4 w-4/5 ">
                                    <p className="font-poppins md:text-lg text-xs opacity-50">I am a passionate frontend developer and project manager with a knack for creating intuitive and aesthetic web interfaces. With a focus on detail and user experience, I bring projects to life through seamless collaboration and efficient management  I bring projects to life through seamless collaboration and efficient management</p>
                                </div>
                            </div>
                            <button className="font-poppins py-2 px-6 rounded-full border m-2 font-semibold border-black">More details</button>
                        </div>
                    </div>
                </div>

                {/* the service provide for you  */}
                <div className="my-32">
                    <div className="flex justify-center">
                        <p className="font-poppins font-semibold md:text-2xl text-xl my-10">The Service We Provide For You</p>
                    </div>

                    <div className="grid gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {/* Service 1 */}
                        <div className="font-nunito flex justify-center items-center text-center">
                            <div>
                                <div className="flex justify-center items-center">
                                    <img src={S1} className="w-12" />
                                </div>
                                <p className="font-bold text-xl my-2">App Development</p>
                                <div className="text-center flex justify-center">
                                    <div className="w-3/5">
                                        <p className="text-sm opacity-50">Create a platform with the best and coolest quality from us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="font-nunito flex justify-center items-center text-center">
                            <div>
                                <div className="flex justify-center items-center">
                                    <img src={S1} className="w-12" />
                                </div>
                                <p className="font-bold text-xl my-2">Web Development</p>
                                <div className="text-center flex justify-center">
                                    <div className="w-3/5">
                                        <p className="text-sm opacity-50">Create a platform with the best and coolest quality from us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="font-nunito flex justify-center items-center text-center">
                            <div>
                                <div className="flex justify-center items-center">
                                    <img src={S2} className="w-12" />
                                </div>
                                <p className="font-bold text-xl my-2">UI/UX Design</p>
                                <div className="text-center flex justify-center">
                                    <div className="w-3/5">
                                        <p className="text-sm opacity-50">
                                            We provide UI/UX Design services, and of course with the best quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="font-nunito flex justify-center items-center text-center">
                            <div>
                                <div className="flex justify-center items-center">
                                    <img src={S1} className="w-12" />
                                </div>
                                <p className="font-bold text-xl my-2">ERP Development</p>
                                <div className="text-center flex justify-center">
                                    <div className="w-3/5">
                                        <p className="text-sm opacity-50">We provide Graphic Design services, with the best designers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="font-nunito flex justify-center items-center text-center">
                            <div>
                                <div className="flex justify-center items-center">
                                    <img src={S3} className="w-12" />
                                </div>
                                <p className="font-bold text-xl my-2">CRM Development</p>
                                <div className="text-center flex justify-center">
                                    <div className="w-3/5">
                                        <p className="text-sm opacity-50">Create a platform with the best and coolest quality from us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="font-nunito flex justify-center items-center text-center">
                            <div>
                                <div className="flex justify-center items-center">
                                    <img src={S1} className="w-12" />
                                </div>
                                <p className="font-bold text-xl my-2">E-Commerce Solution</p>
                                <div className="text-center flex justify-center">
                                    <div className="w-3/5">
                                        <p className="text-sm opacity-50">
                                            We provide Photography services, and of course with the best quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Our Awesome Portofolio */}
                    <div className="flex justify-center my-32 ">
                        <div className="grid gap-10 lg:gap-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="w-full h-96 bg-black rounded-xl flex justify-center items-center">
                                    <img src={Pawsitive} className="w-80 h-80" onClick={() => redirect(1)} />
                                </div>
                                <div className="w-full h-96 bg-black rounded-xl flex justify-center items-center">
                                    <img src={JesicaFlat} className="w-80 h-80" onClick={() => redirect(2)} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="w-full h-96 bg-black rounded-xl flex justify-center items-center">
                                    <img src={UrbanStudio} className="w-80 h-80" onClick={() => redirect(3)} />
                                </div>
                                <div className="w-full h-96 bg-black rounded-xl flex justify-center items-center">
                                    <img src={SolarCRM} className="w-80 h-80" onClick={() => redirect(4)} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <BuildYourAwesomePlatforn
                        Color="#F9B402"
                    />

                    <WriteToAs />



                </div>
            </div>

            <div className="bg-black w-full h-96"></div>






        </div>
    </>)
}

export default HomePg;