import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="mx-5">
      <Helmet>
        <title>Home | Dental Point</title>
        <meta name="Dental Point" content="Dental Point's HomePage" />
      </Helmet>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
