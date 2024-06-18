"use client"

import { motion } from "framer-motion";
import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { fadeIn, variants } from "../../../../variants";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const interBubble =
        document.querySelector < HTMLDivElement > ".interactive";
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
          move();
        });
      }

      window.addEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });

      move();
    });
  }, []);

  return (
    <div>
      {" "}
      <div className="container mx-auto py-20 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Empieza <span className="text-accent">Ya!</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >

            <div className="flex gap-x-6 w-full">
              <input className="input" placeholder="nombre" type="text" />
              <input className="input" placeholder="email" type="email" />
            </div>
            <input className="input" placeholder="subtitulo" type="text" />
            <textarea className="textarea" placeholder="mensaje"></textarea>
            <button className="btn flex rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
            </button>
          </motion.form>
        </div>
      </div>
      <div class="gradient-bg fixed inset-0 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div class="gradients-container">
          <div class="g1"></div>
          <div class="g2"></div>
          <div class="g3"></div>
          <div class="g4"></div>
          <div class="g5"></div>
          <div class="interactive"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

