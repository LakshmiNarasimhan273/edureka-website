import React from "react";
import { Link } from "react-router-dom";

function FullstackTopics() {
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
                MongoDB
              </h2>
              <p class="leading-relaxed text-base mb-4">
                MongoDB is a popular, open-source, NoSQL database management
                system that is designed for the storage and retrieval of
                unstructured or semi-structured data
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Express.js
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Express.js, often referred to simply as Express, is a fast,
                minimalist, and flexible web application framework for Node.js.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                React.js
              </h2>
              <p class="leading-relaxed text-base mb-4">
                React, also known as React.js or ReactJS, is an open-source
                JavaScript library for building user interfaces (UIs) or user
                interface components for web applications
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Node.js
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Node.js is an open-source, server-side JavaScript runtime
                environment that allows developers to execute JavaScript code
                outside of a web browser
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

export default FullstackTopics;
