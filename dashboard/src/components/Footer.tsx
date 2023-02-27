import React from "react";
import { BsLinkedin, BsGithub, BsMailbox, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-white absolute bottom-0 w-full">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              href="https://ramos-larissa.vercel.app/"
              target={"_blank"}
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/team"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Team
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link
              href="/contact"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="https://www.linkedin.com/in/lsramos95/" target={"_blank"} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Linkedin</span>
            <BsLinkedin size={"1.5rem"} />{" "}
          </Link>
          <Link href="https://github.com/ramos-larissa" target={"_blank"} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <BsGithub size={"1.5rem"} />
          </Link>
          <Link href="https://www.instagram.com/pandinhalsr/" target={"_blank"} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <BsInstagram size={"1.5rem"} />
          </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 Larissa Ramos, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
