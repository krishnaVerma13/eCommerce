import React from "react";
import logo from '../assets/PetcareDeatail_Img/image_46.png'
import Heading from "../components/Project_details/heading";
import About_Project from "../components/Project_details/About_Project";
import Contribution from "../components/Project_details/Contribution";
import BuildYourAwesomePlatforn from "../components/BuildYourAwesomePlatform";
import sysImg from "../assets/Jassica_Img/Mob-Lap.png"
import img1 from "../assets/Jassica_Img/room.png"
import img2 from "../assets/Jassica_Img/malta.png"
import img3 from "../assets/Jassica_Img/booking.png"
import img4 from "../assets/Jassica_Img/secure.png"
import log from "../assets/Jassica_Img/logo.png"
import TechnologiesUsed from "../components/Project_details/TechnologiesUsed";

function JassicaFlat () {
  return (<>
    <div className="bg-[#3F5D97] w-full h-full">

      <Heading
       logo={log}
       name="Jassica Flat:"
       desc1="Stay, Relax, and Explore  the Mountains"
       desc2=""
       text="A booking platform as serene as the destination itself"
      />
      
      

      <div className="mb-16">
        {/* <img className="w-1/3 items-center" src={bgImg_2}/>
        <img className="w-11/12 items-center" src={bgImg_1}/> */}
        <img className="w-11/12 justify-center my-auto " src={sysImg} />
      </div>

      <About_Project
      Pro_desc="PetCare is an e-commerce platform built to simplify shopping for pets. Designed with user convenience in mind, it features an intuitive catalog, seamless navigation, and secure payment systems."
      image1={img1}
      name1="Room Categories"
      image2={img2}
      name2="Discover Malta"
      image3={img3}
      name3="Booking Calendar"
      image4={img4}
      name4="Secure Payments"
      />

      <TechnologiesUsed/>

     <Contribution/>
       

    <BuildYourAwesomePlatforn
    Color="#2356B9"
    />
    
    </div>
  </>)

}

export default JassicaFlat;

     

     
      
     

      
      