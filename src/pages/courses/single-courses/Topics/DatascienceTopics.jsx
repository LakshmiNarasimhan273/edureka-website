import React from "react";
import { Link } from "react-router-dom";

function DatascienceTopics() {
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
                Python
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Python is a high-level, general-purpose programming language
                known for its simplicity and readability. It was created by
                Guido van Rossum and first released in 1991.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Machine Learning
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Machine learning is a subset of artificial intelligence (AI)
                that focuses on the development of algorithms and statistical
                models that enable computer systems to improve their performance
                on a specific task.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Deep Learning
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Deep learning is a subfield of machine learning and artificial
                intelligence (AI) that focuses on the use of artificial neural
                networks to model and solve complex problems.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Tableau
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Tableau is a powerful data visualization and business
                intelligence (BI) tool that allows users to connect to various
                data sources, create interactive and shareable dashboards, and
                gain insights from data through visualizations.
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

export default DatascienceTopics;
