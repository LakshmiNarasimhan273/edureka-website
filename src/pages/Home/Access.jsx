import React from "react";
import dashboard from "../../assets/features/dashboard.png";
import resume from "../../assets/features/resume.png";
import jobBoard from "../../assets/features/job_board.png";
import Testimonials from "./Testimonials";

function Access() {
  const data = [
    {
      id: 1,
      src: dashboard,
      content: "Dashboard",
    },
    {
      id: 2,
      src: resume,
      content: "Manage Resume",
    },
    {
      id: 3,
      src: jobBoard,
      content: "Job Board",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="mb-4">
            <h1 className="text-center font-semibold text-black text-4xl">
              Elevayt - Placement Support
            </h1>
            <p className="text-black text-lg w-[80%] flex ml-10 mt-5 text-center sm:ml-24">
              Get access to premium placement portal with verified jobs
              available exclusively for our students. Say goodbye to the pain of
              searching and receive job opportunities matching your skills and
              aspirations, in a jiffy. Contact a Company’s hiring team directly
              and receive quicker responses.
            </p>
          </div>
          <div className="flex mt-8 flex-wrap -m-4">
            {data.map(({ id, src, content }) => (
              <div key={id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-56 md:h-44 w-full object-cover object-center"
                    src={src}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg text-center bg-orange-500 font-medium text-white mb-3">
                      {content}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}

export default Access;
