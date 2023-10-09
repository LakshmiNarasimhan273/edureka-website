import React from "react";
import Form from "../../components/contact/Form";

import certificate1 from "../../assets/certificates/first_certificate.png";
import certificate2 from "../../assets/certificates/second_certificate.png";

function Certificate() {
  return (
    <div className="bg-slate-100">
      <section className="text-gray-600 pb-5 body-font">
        <h1 className="text-4xl font-semibold text-center text-black">
          Dual Certifications
        </h1>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-70 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={certificate1}
                />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-70 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={certificate2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Form />
    </div>
  );
}

export default Certificate;
