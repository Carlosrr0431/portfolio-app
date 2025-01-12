"use client"

import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";

import { fadeIn, variants } from "../../../../variants.js";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 w-[400px] mx-auto"
            >
              Mis servicios <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto"
            >
              Te acompaño en todo el ciclo de tu proyecto, desde describir la logica del negocio y sus necesidades, hasta hacerlo realidad desde el campo digital. Mis servicios contemplan desde el diseño de logos, marketing digital, hasta el desarollo de soluciones digitales.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] "
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;
