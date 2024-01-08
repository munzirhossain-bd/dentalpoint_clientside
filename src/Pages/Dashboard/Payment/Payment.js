import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import PaymentCard from "../../../assets/images/PaymentCard.jpg";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.React_App_Payment);

const Payment = () => {
  const booking = useLoaderData();
  // const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;
  // if(navigation.state === "loading"){
  //     return <Loading></Loading>
  // }
  return (
    <div className="justify-items-center">
      <div className="card w-[50%] bg-base-100 shadow-xl">
        <figure>
          <img
            src={PaymentCard}
            alt="PaymentCard"
          />
        </figure>
        <div className="card-body">
          <p className="text-center text-3xl text-lime-600">Payment for {treatment}</p>
          <p className="text-xl text-center text-black">
            Please pay <strong>${price}</strong> for your appointment on{" "}
            {appointmentDate} at {slot}
          </p>
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
