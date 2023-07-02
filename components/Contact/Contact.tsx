import React from "react";
import MessageForm from "./Form";
import MapChart from "./MapChart";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <section className="h-screen pt-16 flex flex-col justify-between">
      <div className="w-full flex items-center">
        <MessageForm />
        <MapChart/>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
