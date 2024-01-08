import React from "react";
import DoctorFace from "../../../assets/images/DoctorFace.jpg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { ButtonAnimation } from "../../../components/Animation/ButtonAnimation";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={DoctorFace} className="rounded-lg lg:w-1/2 " alt="" />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Modern DentalCare And Hospital</h1>
          <p className="py-6">
          <span className="text-xl">We</span> understand the importance of a healthy and beautiful smile in enhancing your overall well-being. Our dedicated team of dental professionals is committed to providing personalized and compassionate care to every patient who walks through our doors.
          </p>
          <Link to='/'><ButtonAnimation
            element={
              <PrimaryButton>Let's Explore</PrimaryButton>
            }></ButtonAnimation></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
