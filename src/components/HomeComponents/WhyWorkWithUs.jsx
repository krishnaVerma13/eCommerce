import DTSLOGO from "../../assets/ImageAndIcons/dtslogo.png"
function WhyWorkWithUs(){
return(
    <div className="p-8 bg-[#EDF2FF] ">
        <h3 className="text-lg font-semibold text-[#0040FF]  text-center mb-3">Why Work With</h3>
        <h3 className="text-3xl font-bold text-center mt-3">
              Dharma Tech Solution? 
            </h3>
            <div className="bg-white rounded-2xl flex flex-wrap mt-5 p-5 ">
                <div className="bg-black rounded-full p-3 mx-auto my-auto ">
                    <img 
                    src={DTSLOGO}
                    className="w-80 p-10 my-auto mx-auto"
                    />
                </div>
                <div className="p-10 ">
                    <ul>
                        <li className="font-bold text-sm md:text-xl mt-5 mb-10 text-nowrap capitalize"> Customized,Future-ready solutions built for your needs</li>
                        <li className="font-bold text-sm md:text-xl mt-5 mb-10 text-nowrap capitalize">Expert Team of developers,designers,and Analysts</li>
                        <li className="font-bold text-sm md:text-xl mt-5 mb-10 text-nowrap capitalize">CLient-first Approach with clear Communicatio</li>
                        <li className="font-bold text-sm md:text-xl mt-5 mb-10 text-nowrap capitalize">focus on quality , efficiency, and timely delivery</li>
                        <li className="font-bold text-sm md:text-xl mt-5 mb-10 text-nowrap capitalize">cutting-edge technology and innovative problem solving</li>
                    </ul>
                </div>

            </div>
            <div className="mt-12 bg-black text-white p-10 rounded-lg text-wrap">
                <h1 className="text-wrap  text-center text-xl">Lets bring your vision to life ! Reach out today for a free consultation and discover how Dharma</h1>
                <h1 className="text-wrap  text-center text-xl"> Tech Solution's innovative web and app solutions can elavate your business</h1>
                
                <center><button className=" bg-white mt-3 text-black p-2 rounded-lg font-semibold ">Request a Free Consulation</button></center>
                
            </div>
        </div>
)
}
export default WhyWorkWithUs