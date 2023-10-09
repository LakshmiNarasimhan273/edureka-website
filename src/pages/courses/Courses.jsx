import React from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsDatabaseFillGear } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import Certificate from "./Certificate";

function Courses() {
  return (
    <div>
      <section className="text-gray-600 bg-slate-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <FaReact className="text-7xl" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Full Stack Web Development
              </h2>
              <p className="leading-relaxed text-base">
                Topics Includes: HTML, CSS, JavaScript, React JS + 4 more
              </p>
              <Link
                to="/full-stack"
                className="mt-3 text-orange-500 font-semibold inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Data Science{" "}
              </h2>
              <p className="leading-relaxed text-base">
                Topics Includes: Python, Machine Learning, Deep Learning + 3
                more
              </p>
              <Link
                to="/data-science"
                className="mt-3 text-orange-500 font-semibold inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <BsDatabaseFillGear className="text-7xl" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <AiOutlineCloudServer className="text-7xl" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Cloud and DevOps{" "}
              </h2>
              <p className="leading-relaxed text-base">
                Topics Includes: Linux, Core AWS Services, Git, Jenkins,
                Ansible, + 3 more
              </p>
              <Link
                to="/cloud"
                className="mt-3 text-orange-500 font-semibold inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Certificate />
    </div>
  );
}

export default Courses;
