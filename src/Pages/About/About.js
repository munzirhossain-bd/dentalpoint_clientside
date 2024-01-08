import React from "react";

import doctor from "../../assets/images/doctor.png";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div>
      <Helmet>
                <title>About | Dental Point</title>
            </Helmet>
      <div className="hero min-h-screen bg-blue-100">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="max-w-sm " alt="" />
          <div className="items-center">
            <h1 className="text-5xl font-bold text-center">About US</h1>
            <p className="py-6 text-justify">
              At DentalPoint, we believe in delivering exceptional dental care
              that goes beyond routine check-ups. Our team of dedicated and
              skilled professionals is committed to providing personalized and
              comprehensive oral health solutions to meet the unique needs of
              each patient.
            </p>
            <p className="py-6 text-justify">
              With a focus on excellence, innovation, and patient comfort,
              DentalPoint strives to be your trusted partner on the journey to
              optimal dental health. Our state-of-the-art facilities are
              equipped with the latest technology, ensuring precision and
              efficiency in every procedure. We take pride in creating a warm
              and welcoming environment, where you can feel at ease while
              receiving top-notch dental care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
