import React from "react";
import { BsLinkedin, BsGithub, BsMailbox, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-white absolute bottom-0 w-full">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="https://ramos-larissa.vercel.app/"
              target={"_blank"}
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/team"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Team
            </a>
          </div>

          <div className="px-5 py-2">
            <a
              href="/contact"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Linkedin</span>
            <BsLinkedin size={"1.5rem"} />{" "}
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <BsGithub size={"1.5rem"} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <BsInstagram size={"1.5rem"} />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 Larissa Ramos, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
