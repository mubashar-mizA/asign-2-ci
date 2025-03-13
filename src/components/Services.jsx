import React from "react";

import { servicesData } from "../assets/ServicesData";


const Services = () => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 w-full sm:w-9/12 mx-auto ">

      {servicesData.map((service, index) => (

        <div
          key={index}
          className="border p-4 flex flex-col items-center text-[10px] gap-3 rounded-md shadow-lg text-black py-10 group "
        >
          <div>
            <img
              src={service.icon}
              alt={service.title}
              className="w-12 group-hover:scale-125 ease-in-out duration-300"
            />
          </div>

          <h3 className="text-lg text-[#004C83] font-semibold">{service.title}</h3>

          <p className="group-hover:text-[#008360]">{service.description}</p>

          <button
            className=" px-5 py-2 rounded-md bg-[#004C83] text-white text-[12px] hover:bg-white hover:border-[#004C83] hover:text-[#004C83] animation duration-300 border-2"
          ><a href="3">{service.buttonText}</a></button>

        </div>

      ))}

    </div>

  );

};

export default Services;
