import React from "react";
import { ButtonAnimation } from "../../../components/Animation/ButtonAnimation";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <ButtonAnimation
          element={
            <img src={img} alt="ima1" className="rounded-xl" />
          }></ButtonAnimation>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
