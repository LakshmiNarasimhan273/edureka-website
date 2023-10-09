import React from "react";
import { BsStarFill } from "react-icons/bs";
import firstImage from "../../assets/quickAds/elc_four_1.png";
import secondImage from "../../assets/quickAds/elc_four_2.png";
import thirdImage from "../../assets/quickAds/elc_four_3.png";
import fourthImage from "../../assets/quickAds/elc_four_4.png";
import CareerTracks from "./CareerTracks";

function Statics() {
  const adBanner = [
    {
      id: 1,
      src: firstImage,
      heading: "4.7",
      starIcon: <BsStarFill />,
      title: "Google reviews",
    },
    {
      id: 2,
      src: secondImage,
      heading: "4.7",
      starIcon: <BsStarFill />,
      title: "Trustpilot reviews",
    },
    {
      id: 3,
      src: thirdImage,
      heading: "4.5",
      starIcon: <BsStarFill />,
      title: "G2 reviews",
    },
    {
      id: 4,
      src: fourthImage,
      heading: "4.4",
      starIcon: <BsStarFill />,
      title: "Sitejabber reviews",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap m-4 text-center">
            {adBanner.map(({ id, src, heading, starIcon, title }) => (
              <div className="p-2  sm:w-1/4 w-1/2">
                <div
                  key={id}
                  className="flex gap-3 items-center justify-center"
                >
                  <img src={src} alt="Icons" className="w-[15%] h-[10%]" />

                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    {heading}
                  </h2>
                  <span className="text-yellow-400 text-xl mt-3">
                    {starIcon}
                  </span>
                </div>
                <p className="leading-relaxed">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CareerTracks />
    </div>
  );
}

export default Statics;
