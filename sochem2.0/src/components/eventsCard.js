import React from "react";
import { useState } from "react";
import Accordion from "./accordion";
const eventsCard = (props) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        onClick={handleChange}
        className="bg-[url('/images/3.jpg')] w-[25rem] h-[18rem] sm:w-[25rem] sm:h-[18rem] lg:w-[25rem] lg:h-[18rem] flex text-center justify-center items-center m-auto bg-cover border-4 border-black rounded-lg"
      >
        <h1 className="flex text-center justify-center text-4xl font-bold text-[#F7FAFF] ">
          {props.title}
        </h1>
      </div>
      <Accordion
        open={open}
        handleOpen={handleChange}
        href={props.href}
        title={props.title}
        data={props.data}
      />
    </div>
  );
};

export default eventsCard;
