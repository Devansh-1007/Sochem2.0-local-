import React, { useState } from "react";
import EventsCarousel from "../components/eventsCarousel";
import Navbar from "@/components/navbar";
import EventsCard from "@/components/eventsCard";
import data from "../../data/data.json";
import Footer from "@/components/footer";



export default function events() {
  const [searchInput, setSearchInput] = useState("");
  const filteredData = data.eventsCard.filter((e) => {
    if (searchInput === "") {
      return e;
    } else {
      return e.title.toLowerCase().includes(searchInput);
    }
  });
  // console.log(searchInput);
  return (
    <div>
      <Navbar />
      <div className="bg-[#040D21] w-full ">
        <span className="font-medium flex text-[#F7FAFF] justify-center text-2xl sm:text-3xl lg:text-5xl">
          <p className="mt-20">
            A Collection of <span className="text-[#2A6BFF]">Nostalgic</span>{" "}
            Events!
          </p>
        </span>
        <EventsCarousel />
      </div>
      <div className="m-auto justify-center">
        <div className="mb-3 p-8 rounded-lg">
          <input
            type="search"
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="exampleSearch"
            placeholder="Search for Events"
            onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <div className=" m-auto grid-cols-1 sm:grid-cols-2 grid justify-center lg:grid-cols-2 p-12 gap-12 auto-cols-max ">
        {filteredData.map((i) => (
          <EventsCard
            key={i.id}
            title={i.title}
            description={i.description}
            url={i.url}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
