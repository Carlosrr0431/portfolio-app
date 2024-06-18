// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Marca",
    description: "Te ayudamos a fortelecer tu marca, para que logres avances reales. ",
  },
  {
    icon: <RxPencil2 />,
    title: "Diseño",
    description: "Te ayudamos en todo tipo de diseños modernos para aumentar el alcance de tu negocio.",
  },
  {
    icon: <RxDesktop />,
    title: "Desarollo",
    description: "Desarollamos aplicaciones web a tu medida para todo tipo de soluciones que buscas.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Te ayudamos a que tu app web tenga buen posicionamient SEO y tenga mayor alcance.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}

      modules={[Pagination]}

      freeMode={true}
      pagination={{
        clickable: true
      }}



      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className="bg-[rgb(10,7,18)]  h-[90%] rounded-lg px-6 py-8 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgb(13,10,25)]  transition-all duration-300">

            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>

            {/* title y description */}

            <div className="mb-4">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}

            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
            </div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default ServiceSlider;
