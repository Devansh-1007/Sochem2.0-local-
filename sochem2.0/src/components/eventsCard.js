import React, { useState } from "react";
import data from "../../data/data.json";
import { Dialog, Transition } from "@headlessui/react";

const eventsCard = (props) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  const cardStyle = {
    backgroundImage: `url(${props.url})`,
    height: "40rem",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div onClick={handleChange} style={cardStyle}>
        <h1 className="flex text-center justify-center text-4xl font-bold text-[#F7FAFF] ">
          {props.title}
        </h1>
      </div>
      {open && (
        <Transition show={open} as={React.Fragment}>
          <Dialog
            as="div"
            className="w-[80rem] m-auto justify-center fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setOpen(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              </Transition.Child>

              <div className="inline-block align-middle max-w-lg w-full p-6 my-8 overflow-hidden text-left  transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {props.title}
                </Dialog.Title>
                <div className="mt-2">
                  <img src={props.url} alt={props.title} className="w-full" />
                  <p className="mt-2 text-gray-500">{props.description}</p>
                </div>
                <span
                  className="inline-block align-middle ml-[43%] mt-2 justify-center bg-red-600 p-2 rounded-lg align-center"
                  aria-hidden="true"
                  onClick={() => setOpen(false)}
                >
                  <div>Close</div>
                </span>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default eventsCard;
