import React from "react";
import logo from '../assets/PetcareDeatail_Img/image_46.png'
import bgImg_1 from '../assets/PetcareDeatail_Img/Macbook_bg.png'
import bgImg_2 from '../assets/PetcareDeatail_Img/Mobile_bg.png'
import petBg from '../assets/PetcareDeatail_Img/Mob_mac.png'
import why_1 from '../assets/PetcareDeatail_Img/smooth_crop.png'
import why_2 from '../assets/PetcareDeatail_Img/Real_crop.png'
import why_3 from '../assets/PetcareDeatail_Img/Mobile_crop.png'
import why_4 from '../assets/PetcareDeatail_Img/secure_crop.png'
import webImg from '../assets/PetcareDeatail_Img/petCare_web.png'
import AlokSharma from '../assets/PetcareDeatail_Img/AlokSharma.png'
import Heading from "../components/Project_details/heading";
import About_Project from "../components/Project_details/About_Project";
import Contribution from "../components/Project_details/Contribution";
import BuildYourAwesomePlatforn from "../components/BuildYourAwesomePlatform";
import TechnologiesUsed from "../components/Project_details/TechnologiesUsed";


function Petcare_deatails() {
  return (<>
    <div className="bg-amber-400 w-full h-full">

      <Heading
       logo={logo}
       name="PAWSITIVE"
       desc1="PETCARE: A SEAMLESS E-COMMERCE "
       desc2="EXPRIEANCE FOR PET LOVERS"
       text="Optimized for all devices to provide a perfect shopping experience for pet owners"
      />
      
      

      <div className="mb-16">
        {/* <img className="w-1/3 items-center" src={bgImg_2}/>
        <img className="w-11/12 items-center" src={bgImg_1}/> */}
        <img className="w-11/12 justify-center my-auto " src={petBg} />
      </div>

      <About_Project
      Pro_desc="PetCare is an e-commerce platform built to simplify shopping for pets. Designed with user convenience in mind, it features an intuitive catalog, seamless navigation, and secure payment systems."
      image1={why_1}
      name1="Smooth navigation"
      image2={why_2}
      name2="Real time Update"
      image3={why_3}
      name3="Mobile first Design"
      image4={why_4}
      name4="Secure Payment"
      />

    <TechnologiesUsed/>

     <Contribution/>
       

    <BuildYourAwesomePlatforn/>

     

     
      
     

      
      
    
    </div>
  </>)

}

export default Petcare_deatails;