import React from "react";
import {
  SiTcs,
  SiWalmart,
  SiMercedes,
  SiWipro,
  SiDell,
  SiCisco,
} from "react-icons/si";
import { BiLogoVisa } from "react-icons/bi";

function Alumni() {
  const cardsDetails = [
    {
      id: 1,
      src: <SiTcs />,
      style: " text-7xl",
      color: "text-red-500",
    },
    {
      id: 2,
      src: <BiLogoVisa />,
      style: " text-7xl",
      color: "text-blue-700",
    },
    {
      id: 3,
      src: <SiWalmart />,
      style: "text-7xl",
      color: "text-sky-600",
    },
    {
      id: 4,
      src: <SiMercedes />,
      style: " text-7xl",
      color: "text-grey-500",
    },
    {
      id: 5,
      src: <SiWipro />,
      style: " text-7xl",
      color: "text-blue-800",
    },
    {
      id: 6,
      src: <SiDell />,
      style: "text-7xl",
      color: "text-sky-600",
    },
    {
      id: 7,
      src: <SiCisco />,
      style: "text-7xl",
      color: "text-sky-600",
    },
    {
      id: 8,
      src: "Honeywell",
      style: "font-bold text-3xl",
      color: "text-red-600",
    },
  ];

  return (
    <div>
      <section class="text-gray-600 bg-slate-100 body-font">
        <div class="container px-5 py-10 mx-auto">
          <h1 className="text-center text-black font-semibold text-4xl pb-3">
            Our Alumni Work At
          </h1>
          <p className="text-black text-xl pb-3 text-center">
            Our training is highly valued by Global companies, hence our
            students have an edge in securing placements. Here are some
            companies who hired Edureka students.
          </p>
          <div class="flex flex-wrap -m-4">
            {cardsDetails.map(({ id, src, style, color }) => (
              <div
                key={id}
                class="lg:w-1/4 md:w-1/3 flex justify-center items-center p-4 w-full"
              >
                <span className={`${style} ${color}`}>{src}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Alumni;
