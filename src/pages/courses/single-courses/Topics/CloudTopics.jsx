import React from "react";
import { Link } from "react-router-dom";

function CloudTopics() {
  return (
    <div>
      <section class="text-gray-600 pb-10 body-font">
        <div class="container px-5 mx-auto">
          <div class="flex flex-col text-center w-full mb-1">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Major Topics
            </h1>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Linux
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Linux is an open-source, Unix-like operating system kernel that
                serves as the core component of various Linux distributions (or
                distros).
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Core AWS Services{" "}
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Amazon Web Services (AWS) offers a wide range of cloud computing
                services to help individuals and organizations build, deploy,
                and manage their applications and infrastructure in the cloud.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Git{" "}
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Git is a distributed version control system (DVCS) that is
                widely used for tracking changes in source code during software
                development.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Jenkins{" "}
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Jenkins is an open-source automation server that is widely used
                for automating various aspects of the software development
                process.
              </p>
            </div>
          </div>
          <Link to="/contact">
            <button class="flex mx-auto mt-16 font-semibold text-white bg-orange-500 border-0 py-3 px-10 focus:outline-none rounded text-lg">
              Contact Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CloudTopics;
