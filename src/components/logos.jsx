import React from "react";
import "./logos.css";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Logos = () => {
  return (
    <>
      <section>
        <div className="fixed bottom-0 left-12 flex flex-col gap-6 z-40">
          <div className="text-slate hover:text-green">
            <a
              href="https://github.com/Aeron2"
              rel="noreferrer"
              target="_blank"
            >
              <FiGithub size={23} />
            </a>
          </div>
          <div className="text-slate hover:text-green ">
            <a
              href="https://www.instagram.com/aerondhruv/"
              rel="noreferrer"
              target="_blank"
            >
              <FiInstagram size={23} />
            </a>
          </div>

          <div className="text-slate hover:text-green">
            <a
              href="https://www.linkedin.com/in/aerondhruv/"
              rel="noreferrer"
              target="_blank"
            >
              <FiLinkedin size={23} />
            </a>
          </div>
          <div className=" hover:text-green">
            <a
              href="https://twitter.com/AeronDhruv"
              rel="noreferrer"
              target="_blank"
              className="text-slate hover:text-green"
            >
              <FiTwitter size={23} />
            </a>
          </div>
          <div className="vl"></div>
        </div>

        <div className="fixed bottom-0 -right-12 flex flex-col gap-32 sfmono-med">
          <div className="rotate-90">
            <a
              id="anchor"
              href="mailto:dhruv.aeron3@gmail.com"
              className="tracking-widest  text-slate  hover:text-green"
            >
              dhruv.aeron3@gmail.com
            </a>
          </div>
          <div className="vr"></div>
        </div>
      </section>
    </>
  );
};
export default Logos;
