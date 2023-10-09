import React from "react";
import dataScience from "../../../assets/programs/data-science.png";
import { AiFillStar } from "react-icons/ai";
import DatascienceTopics from "./Topics/DatascienceTopics";

function DataScience() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mt-10 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={dataScience}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                COURSE NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Data Science
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <AiFillStar className="text-orange-500 text-lg" />
                  <span className="text-gray-600 ml-3">4.5 Ratings</span>
                </span>
              </div>
              <ul className="leading-relaxed">
                <li>190+ hours of regimental learning</li>
                <li>90+ MERN stack lab sessions</li>
                <li>Access to top recruiters</li>
                <li>Industry aligned FSWD curriculum</li>
                <li>GOI recognized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <DatascienceTopics />
    </div>
  );
}

export default DataScience;
