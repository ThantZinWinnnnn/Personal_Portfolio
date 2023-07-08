import React from "react";
import MessageForm from "./Form";
import MapChart from "./MapChart";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen pt-16 flex flex-col justify-between overflow-y-scroll font-poppins">
      <div className="w-full flex items-center gap-8 lg:gap-0 flex-col sm:flex-row">
        <MessageForm />
        <MapChart/>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
