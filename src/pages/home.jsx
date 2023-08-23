import React from "react";
import ContactUsSection from "../components/contact-us";
import Counter from "../components/counter";
import Partners from "../components/parteners";
import Candidates from "../components/candidates";

const Home = () => {
  return (
    <>
      <Candidates />
      <Counter />
      <ContactUsSection />
      <Partners />
    </>
  );
};

export default Home;
