import React from "react";
import edurekaIcon from "../../assets/brand/edureka_banner.png";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
  const footerLinks = [
    {
      id: 1,
      name: "About",
      path: "/about",
    },
    {
      id: 2,
      name: "Courses",
      path: "/courses",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];

  const footerIcons = [
    {
      id: 1,
      icon: <BsLinkedin />,
      path: "https://www.linkedin.com/company/edureka-learning-center-tambaram/",
    },
    {
      id: 2,
      icon: <BsInstagram />,
      path: "https://instagram.com/edureka_learning_center_tbm?igshid=NzZlODBkYWE4Ng==",
    },
    {
      id: 3,
      icon: <BsFacebook />,
      path: "https://www.facebook.com/profile.php?id=100084342051528&mibextid=ZbWKwL",
    },
  ];

  return (
    <div>
      <footer className=" bg-blue-900 body-font">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link to="/">
              <img
                src={edurekaIcon}
                className="w-[80%] h-[80%] rounded-lg"
                alt=""
              />
            </Link>
            <div className="flex gap-5 mt-5">
              {footerLinks.map(({ id, name, path }) => (
                <div key={id} className="text-slate-400 ">
                  <Link to={path}>{name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-grow flex justify-center flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full ">
              <h2 className="title-font font-medium text-slate-400 tracking-widest text-sm mb-3">
                Corporate Office: 5th Floor, No. 38/4, Outer Ring Rd, adjacent
                to Dell EMC2, Doddanekundi, Bengaluru, Karnataka 560048 For
                enrollments, call 9900108866 For business enquiry, call
                9900108822
              </h2>
            </div>
          </div>
          <span className=" text-slate-300 inline-flex gap-4 sm:ml-auto sm:mt-0 mt-12 justify-center sm:justify-start">
            {footerIcons.map(({ id, icon, path }) => (
              <span key={id}>
                <Link className="text-2xl" to={path}>
                  {icon}
                </Link>
              </span>
            ))}
          </span>
        </div>
        <div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              © 2023 Edureka Learning Center - Tambaram
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
