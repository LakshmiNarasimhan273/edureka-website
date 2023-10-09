import React from "react";
import Form from "../../components/contact/Form";
import testimonial1 from "../../assets/testimonials/testimonial2.jpg";
import testimonial2 from "../../assets/testimonials/testimonial1.jpg";
import testimonial3 from "../../assets/testimonials/testimonial3.jpg";

function Testimonials() {
  const cardsDetails = [
    {
      id: 1,
      src: testimonial1,
      content:
        " It's a great place to learn how to code. The way of teaching and dedication offered towards your development makes it easier to grasp the concepts even for beginners. The best part of Edureka is the faculty, I am grateful for all the guidance",
      name: "Sathish",
      role: "Cloud and DevOps",
    },
    {
      id: 2,
      src: testimonial2,
      content:
        "This was the greatest decision that I had ever made in my life because as an electrical engineer I haven't written a single hello world program in my college days but this program by Edureka built confidence in me and now I am working as a Full Stack developer in enterprise level projects as well as some freelance projects.",
      name: "Barani",

      role: "Full Stack Web Development",
    },
    {
      id: 2,
      src: testimonial3,
      content:
        "One who wants their doubt sorted should join the Data Science program. I started as a beginner and eventually, I feel really comfortable and confident with Data Science. The instructor had 10 to 12 years of experience in the industry.",
      name: "Narendar",
      role: "Data Science",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black">
              See what our Learners have to say
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {cardsDetails.map(({ id, src, content, name, role }) => (
              <div key={id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={src}
                  />
                  <p className="leading-relaxed">{content}</p>
                  <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 flex justify-center items-center gap-1 font-medium title-font tracking-wider text-xl">
                    {name}
                  </h2>
                  <p className="text-gray-500">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Form />
    </div>
  );
}

export default Testimonials;
