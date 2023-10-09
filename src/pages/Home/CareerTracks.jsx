import React from "react";
import fullstack from "../../assets/programs/fullstack.png";
import dataScience from "../../assets/programs/data-science.png";
import cloud from "../../assets/programs/cloud.png";
import Access from "./Access";
import { Link } from "react-router-dom";

function CareerTracks() {
  const cardData = [
    {
      id: 1,
      src: fullstack,
      mainHeading: "Full Stack Web Development",
      subHeading: " HTML, CSS, JavaScript, React & Node, MongoDB + 4 more",
      specs1: "190+ hours of regimental learning",
      specs2: "90+ MERN stack lab sessions",
      specs3: "Access to top recruiters",
      specs4: "Industry aligned FSWD curriculum",
      specs5: "GOI recognized",
      path: "/full-stack",
    },
    {
      id: 2,
      src: dataScience,
      mainHeading: "Data Science",
      subHeading: " Python, Machine Learning, Deep Learning + 3 more",
      specs1: "190+ hours of regimental learning",
      specs2: "90+ MERN stack lab sessions",
      specs3: "Access to top recruiters",
      specs4: "Industry aligned Data Science curriculum",
      specs5: "GOI recognized",
      path: "/data-science",
    },
    {
      id: 3,
      src: cloud,
      mainHeading: "Cloud and DevOps",
      subHeading: " Linux, Core AWS Services, Git, Jenkins, Ansible, + 3 more",
      specs1: "190+ hours of regimental learning",
      specs2: "90+ MERN stack lab sessions",
      specs3: "Access to top recruiters",
      specs4: "Industry aligned Cloud and DevOps curri...",
      specs5: "GOI recognized",
      path: "/cloud",
    },
  ];

  return (
    <div className="bg-slate-100">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 ml-4">
          <div className="flex justify-center">
            <h1 className="text-black text-4xl mb-8 font-semibold">
              Career Tracks
            </h1>
          </div>
          <div class="-my-8 divide-y-2 divide-gray-100">
            {cardData.map(
              ({
                id,
                src,
                mainHeading,
                subHeading,
                specs1,
                specs2,
                specs3,
                specs4,
                specs5,
                path,
              }) => (
                <div key={id} class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <img src={src} className="w-1/2 sm:w-full" alt="" />
                  </div>
                  <div class="md:flex-grow ml-5 ">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                      {mainHeading}
                    </h2>
                    <p class="leading-relaxed">
                      Topics Includes :
                      <span className="font-semibold text-black">
                        {subHeading}
                      </span>
                      <br />
                      <br />
                      {specs1} <br />
                      {specs2} <br />
                      {specs3} <br />
                      {specs4} <br />
                      {specs5}
                    </p>
                    <Link
                      to={path}
                      class="text-orange-500 font-semibold inline-flex items-center mt-2"
                    >
                      Learn More
                    </Link>
                    <div className=" mt-4 border border-solid rounded-lg border-slate-300"></div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <Access />
    </div>
  );
}

export default CareerTracks;
