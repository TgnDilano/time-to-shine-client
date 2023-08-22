import React from "react";
import contactUsPng from "../assets/phone.jpg";
import { AppName } from "../contants/data";
import { FaMapPin, FaPhoneAlt, FaPhoneSquare } from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import ContactUsForm from "../components/contact-us-form";
import ContactUsSection from "../components/contact-us";
import LineTitle from "../components/line-title";

const ContactUs = () => {
  return (
    <section>
      <div className="w-full h-[26rem] relative">
        <img
          src={contactUsPng}
          className="absolute w-full h-full object-cover "
        />
        <div className="absolute w-full h-full bg-black bg-opacity-70"></div>
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
          <h3 className="upppercase text-5xl font-medium text-center">
            {AppName}
          </h3>
          <div className="flex items-center gap-x-2 mt-7">
            <div className="w-16 h-[0.15rem] bg-white"></div>
            <h6 className="text-3xl ">Contactez-Nous</h6>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center flex-col text-center">
        <div className="grid grid-cols-3 gap-x-6 mt-8">
          <div className="contact-us-box">
            <CiLocationOn size={62} className="text-gold" />
            <div className="flex flex-col items-start gap-y-2">
              <h2 className="titleMedium">Location </h2>
              <p className="text-lg text-zinc-700">Bonamoussadi</p>
              <p className="text-lg text-zinc-700">Rond-point MAETUR</p>
            </div>
          </div>
          <div className="contact-us-box">
            <BsPhone size={62} className="text-gold" />
            <div className="flex flex-col items-start gap-y-2">
              <h2 className="titleMedium">Telephone </h2>
              <p className="text-lg text-zinc-700">+(237) 678 10 02 82 (CM)</p>
              <p className="text-lg text-zinc-700">+(237) 658 85 30 98 (CM)</p>
            </div>
          </div>
          <div className="contact-us-box">
            <CiMail size={62} className="text-gold" />
            <div className="flex flex-col items-start gap-y-2">
              <h2 className="titleMedium">Email </h2>
              <p className="text-lg text-zinc-700">time-to-shine@gmail.com</p>
              <p className="text-lg text-zinc-700">
                time-to-shine-info@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col items-center gap-x-2 mt-2">
        <LineTitle title="Contactez-Nous" color="gold" />
        <p className="mt-2 text-2xl text-center">Call us or mail us</p>
      </div> */}
      <div className="flex items-center justify-center mt-3">
        <ContactUsSection />
      </div>
    </section>
  );
};

export default ContactUs;
