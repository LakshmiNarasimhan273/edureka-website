// src/components/ContactPage.jsx
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side: Map */}
      <div className="w-full mt-10 md:h-screen md:mt-28 md:w-1/2 md:order-2">
        <iframe
          title="Google Maps"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6813885761726!2d80.11363907379008!3d12.928187815831182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9c1de61401%3A0x81e812290de357b9!2sEdureka%20Learning%20Center%20-%20Tambaram!5e0!3m2!1sen!2sin!4v1696787955771!5m2!1sen!2sin"
        ></iframe>
      </div>

      {/* Right side: Inquiry Form */}
      <div className="w-full md:w-1/2 md:mt-24 bg-gray-200 p-8 md:order-1">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        <form
          action="https://getform.io/f/43f39f19-e887-4a4b-b3d3-a7ccb940e831"
          method="POST"
        >
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="number"
              required
              name="mobile"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 p-2 w-full font-semibold text-white md:py-3 md:px-8 rounded-md "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
