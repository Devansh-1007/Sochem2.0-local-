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
      <div>
        <div className="  p-4  ">
          <input
            className="lg:w-full border-4 rounded-sm border-gray-100"
            placeholder="Search for Events"
            onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          ></input>
        </div>
      </div>
      <div className="grid-cols-1 sm:grid-cols-2 grid m-auto justify-center lg:grid-cols-2 p-4 gap-4 auto-cols-max ">
        {filteredData.map((i) => (
          <EventsCard key={i.id} title={i.title} description={i.description} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
