import React from "react";
import { CiMail } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const CompanyDetails = () => {
  return (
    <div className="flex items-center flex-col text-center py-16">
      <div className="grid grid-cols-3 gap-x-6">
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
  );
};

export default CompanyDetails;
