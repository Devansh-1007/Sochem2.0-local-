import React from 'react'
import Card from '../testimonialcard';
import data from '../../../data/data.json';
const testimonials = () => {
  return (
    <div className="mt-12 sm:mt-[8.75rem]">
        <p className="font-bold font-heading text-center text-[#03001E] text-xl sm:text-[2.5rem]">
          Testimonials
        </p>
        <div className="flex items-center w-full justify-start mt-8 sm:mt-[3.75rem] overflow-x-scroll">
          {data.testimonials.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                designation={item.designation}
                review={item.review}
              />
            );
          })}
        </div>
      </div>
  )
}

export default testimonials