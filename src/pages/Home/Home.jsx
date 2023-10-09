import React from "react";
import HeroSideImage from "../../assets/hero images/top_mid_logo_new.png";
import Statics from "./Statics";
import { MdLocationOn } from "react-icons/md";
import HeroImage from "../../assets/hero images/heroImage.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-orange-100 text-gray-600 body-font ">
      <div className=" container max-w-screen-xl mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font mt-4 sm:text-4xl text-3xl mb-4 font-medium text-black">
            Tech Ready. Job Ready
          </h1>
          <p className="mb-8 text-slate-900 leading-relaxed">
            Kick-Start your Tech Career by learning the skills that the industry
            demands. Choose from the trending and emerging tech courses to
            unleash your employment potential.
          </p>
          <div className="bg-white px-3 py-2 rounded-xl text-black font-bold">
            <p>Earn upto ₹14,500* from Government of India incentive program</p>
          </div>
          <div>
            <img src={HeroSideImage} className="w-[70%] px-4 py-4" alt="" />
          </div>
          <div className="font-bold text-orange-800 text-2xl">
            <h1>Free Career Counselling</h1>
          </div>
          <div className="flex flex-col mt-4">
            <p className="flex items-center gap-3 justify-center  text-center text-black font-bold bg-orange-200 border-0 py-1 px-6 focus:outline-none rounded-xl text-lg">
              <MdLocationOn />
              Near you in Tambaram, chennai
            </p>
            <Link
              to="/contact"
              className="mt-5 bg-orange-500 text-center text-white font-semibold border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={HeroImage}
          />
        </div>
      </div>
      <Statics />
    </div>
  );
}

export default Home;
