import { workExperience } from "@/Data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.random() * 1000 + 5500}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                height={100}
                width={100}
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start mt-3 text-white-100 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
