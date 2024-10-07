"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Services = ({ services }) => {
  return services.map((service, index) => {
    return (
      <section key={`service-${index}`} className="sectiond py-12">
        <div className="flex justify-center items-center">
          {/* Carousel */}
          <div className="service-carousel w-full md:w-[90%] lg:w-[80%] mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={
                service.images.length > 1 ? { clickable: true } : false
              }
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {/* Slides */}
              {service?.images.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide}
                    alt=""
                    className="mx-auto rounded-lg"
                    width={400} // Adjust width for large images
                    height={400} // Adjust height for large images
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  });
};

export default Services;
