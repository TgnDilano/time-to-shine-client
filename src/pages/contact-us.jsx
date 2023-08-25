import React from "react";
import contactUsPng from "../assets/phone.jpg";
import ContactUsSection from "../components/contact-us";
import HeaderImage from "../components/header-image";
import CompanyDetails from "../components/company-details";

const ContactUs = () => {
  return (
    <section>
      <HeaderImage image={contactUsPng} subtitle="Contactez-Nous" />
      <CompanyDetails />
      <div className="w-full h-[1px] bg-gray-100"></div>
      {/* <div className="w-full flex flex-col items-center gap-x-2 mt-2">
        <LineTitle title="Contactez-Nous" color="gold" />
        <p className="mt-2 text-2xl text-center">Call us or mail us</p>
      </div> */}
      <div className="flex items-center justify-center">
        <ContactUsSection />
      </div>
    </section>
  );
};

export default ContactUs;
