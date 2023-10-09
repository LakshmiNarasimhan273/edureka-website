import React from "react";

const Form = () => {
  return (
    <div name="contact" className="w-full h-full mt-14 bg-slate-100">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-5">
          <h1 className="text-center text-3xl font-semibold text-black">
            Free Career Counselling
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/43f39f19-e887-4a4b-b3d3-a7ccb940e831"
            method="POST"
            className="flex flex-col pb-10 w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your Name"
              className="my-2 p-2 bg-transparent border-2 border-blue-900 rounded-md text-slate-600 font-semibold focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your E-mail"
              className="my-2 p-2 bg-transparent border-2 border-blue-900 rounded-md text-slate-600 font-semibold focus:outline-none"
            />
            <input
              type="number"
              name="mobile"
              required
              placeholder="Enter your Mobile Number"
              className="my-2 p-2 bg-transparent border-2 border-blue-900 rounded-md text-slate-600 font-semibold focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Enter your Message"
              rows="10"
              className="my-2 p-2 bg-transparent border-2 border-blue-900 rounded-md text-slate-600 font-semibold focus:outline-none"
            ></textarea>
            <button className="text-white font-semibold mb-0 bg-orange-500 px-8 py-4 m-2 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
