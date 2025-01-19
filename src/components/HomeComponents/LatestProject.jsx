import Pawsitive from "../../assets/ImageAndIcons/PawsitiveIMG.png"
import UrbanStudio from "../../assets/ImageAndIcons/urbanStudioIMG.png"
import JesicaFlat from "../../assets/ImageAndIcons/jasicaflatIMG.png"
import SolarCRM from "../../assets/ImageAndIcons/solarCRmIMG.png"
function LatestPorject(){
    const arr=[
        {
            img:Pawsitive,
            name:"Petcare - Premium Pet Essentials at Your Fingertips",
            discription:"find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place"
        },
        {
            img:UrbanStudio,
            name:"Urban Studio - Transforming Spaces With Style",
            discription:"Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner"
        },
        {
            img:JesicaFlat,
            name:"Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
            discription:"Book yur perfect stay with ease, from room options to local experiences , all in one place"
        },
        {
            img:UrbanStudio,
            name:"Solar CRM - Powering Solar Panel Sales And Installation",
            discription:"Book your perfect stay with ease , from room options to local experiences , all in one place"
        },
    ]
return(
    <div className="p-8 bg-[#EDF2FF]">
        <h3 className="text-lg font-semibold text-[#0040FF] text-center mb-3">Latest Project</h3>
        <div className="text-center">
        <h3 className="text-3xl font-bold text-center mb-8">
              Our Recent Launched Projects 
            </h3>
            <h3 className="text-3xl -mt-5 font-bold text-center mb-8">
               Available Into Market
            </h3>
            </div>
            <div className="border-2 border-solid border-slate-950  rounded-md p-3 w-fit mx-auto flex-wrap flex items-center justify-center">
                <div className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl"> Web Development</div>
                <div className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">App Development</div>
                <div className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">ERP</div>
                <div className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">CRM</div>
                <div className="hover:bg-black text-black font-semibold cursor-pointer hover:text-white p-3 ml-2 md:ml-9 rounded-3xl">All Projects</div>

            </div>
            <div className=" flex p-6 w-full flex-wrap mt-8">
                {
                    arr.map((item,index)=>{
                        return(
                                <div key={index} className=" w-[310px]  ml-5 mt-3 p-5 bg-white rounded-2xl">
                    <div className="bg-yellow-100 p-1 rounded-2xl grid h-72">
                    <img 
                    src={item.img}
                    className="h-60 mx-auto my-10"
                    />
                    </div>
                    <h2 className="font-bold text-lg mt-2">{item.name} </h2>
                    <h2 className="text-xs mt-2">{item.discription} </h2>
                </div>
                        )
                    })
                }
                
            </div>
    </div>
)
}
export default LatestPorject