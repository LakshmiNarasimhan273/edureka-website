import React from "react";
import { GiTeacher } from "react-icons/gi";
import { MdSettingsSuggest } from "react-icons/md";
import { PiNewspaperFill, PiCertificateFill } from "react-icons/pi";
import { FaFolderClosed } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import Alumni from "./Alumni";
import { Link } from "react-router-dom";

function Benefits() {
  const cardsData = [
    {
      id: 1,
      icons: <GiTeacher />,
      cardTitle: "Faculty-led Blended Training",
      content1: "Pre-recorded concept videos",
      content2: "24X7 faculty support for doubts",
    },
    {
      id: 2,
      icons: <FaFolderClosed />,
      cardTitle: "Certified Program",
      content1: "NASSCOM accredited dual certification",
      content2: "Highly valued by the industry",
    },
    {
      id: 3,
      icons: <MdSettingsSuggest />,
      cardTitle: "Practical Learning",
      content1: "Industry relevant lab-work",
      content2: "Contemporary Case Studies",
    },
    {
      id: 4,
      icons: <PiNewspaperFill />,
      cardTitle: "Placement Assistance      ",
      content1: "Premium job opportunities",
      content2: "Soft-skill training for interviews",
    },
    {
      id: 5,
      icons: <PiCertificateFill />,
      cardTitle: "Unique Pedagogy",
      content1: "World-className LMS",
      content2: "Latest courses demanded by industry",
    },
    {
      id: 6,
      icons: <BiSupport />,
      cardTitle: "Support",
      content1: "Prep support for work-related questions",
      content2: "Live classNamees by experts",
    },
  ];

  return (
    <div>
      <section className="bg-slate-100 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Benefits of Edureka Learning Center
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {cardsData.map(({ id, cardTitle, content1, content2, icons }) => (
              <div key={id} className=" xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 text-2xl inline-flex items-center justify-center rounded-full bg-indigo-100 text-orange-500 mb-4">
                    {icons}
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {cardTitle}
                  </h2>
                  <p className="leading-relaxed text-base">
                    * {content1} <br />* {content2}
                    doubts
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/contact">
            <button className="flex mx-auto mt-16 text-white font-semibold bg-orange-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">
              Book Now
            </button>
          </Link>
        </div>
      </section>
      <Alumni />
    </div>
  );
}

export default Benefits;
