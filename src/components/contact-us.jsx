import React from "react";
import ContactUsForm from "./contact-us-form";
import callCenter from "../assets/call-center.jpg";

const ContactUsSection = () => {
  return (
    <section className="bg-white h-[52rem] w-screen flex items-center justify-center overflow-hidden gap-x-12 padx">
      <div className="w-[36rem] h-[40rem] border border-gold p-5">
        <img src={callCenter} className="w-full h-full object-cover" />
      </div>
      <ContactUsForm />
    </section>
  );
};

export default ContactUsSection;
