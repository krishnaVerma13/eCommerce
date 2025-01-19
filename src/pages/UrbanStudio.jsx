import React from "react";
import logo from '../assets/PetcareDeatail_Img/image_46.png'
import Heading from "../components/Project_details/Heading.jsx";
import About_Project from "../components/Project_details/About_Project";
import Contribution from "../components/Project_details/Contribution";
import BuildYourAwesomePlatforn from "../components/BuildYourAwesomePlatform";
import log from "../assets/Urban_Img/logo.png"
import lapImg from "../assets/Urban_Img/lapImg.png"
import gallery from "../assets/Urban_Img/gallery.png"
import design from "../assets/Urban_Img/case.png"
import TechnologiesUsed from "../components/Project_details/TechnologiesUsed";


function UrbanStudio () {
  return (<>
    <div className="bg-[#224B4C] w-full h-full">

      <Heading
       logo={log}
       name="URBAN STUDIO"
       desc1="ELEVATING SPACES, ONE DESIGN AT A TIME"
       desc2=""
       text="Showcasing timeless interior designs with a modern digital touch"
      />
      
      

      <div className="mb-16">
        {/* <img className="w-1/3 items-center" src={bgImg_2}/>
        <img className="w-11/12 items-center" src={bgImg_1}/> */}
        <img className="w-11/12 justify-center my-auto " src={lapImg} />
      </div>

      <About_Project
      Pro_desc="PetCare is an e-commerce platform built to simplify shopping for pets. Designed with user convenience in mind, it features an intuitive catalog, seamless navigation, and secure payment systems."
      image1={gallery}
      name1="INTERACTIVE GALLERY"
      image2={design}
      name2="DESIGN CASE STUDIES"
      image3={gallery}
      name3="DESIGN BLOG"
      image4={design}
      name4="RESPONSIVE DESIGN"
      />

      <TechnologiesUsed/>

     <Contribution/>
       

    <BuildYourAwesomePlatforn
    Color="#224B4C"
    />
    
    </div>
  </>)

}

export default UrbanStudio;

     

     
      
     

      
      