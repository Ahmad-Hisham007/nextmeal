"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
    {
        id: 1,
        title: "Explore The Lobsters",
        subtitle: "WELCOME TO THE KAFFEN",
        image: "/slider_img_1.jpg", // Replace with your asset
    },
    // Add more slides here...
];

const BannerSlider = () => {

    return (
        <div className="relative h-[600px] w-full overflow-hidden bg-black">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="h-screen w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className=" min-h-screen flex w-full items-center px-8 py-44.25 md:px-20"
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent 100%), url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="max-w-2xl space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="h-[2px] w-8 bg-primary"></span>
                                    <p className="text-sm font-bold tracking-widest text-white uppercase">
                                        {slide.subtitle}
                                    </p>
                                </div>

                                <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                                    {slide.title.split(" ").map((word, i) => (
                                        <span key={i} className="block">
                                            {word}
                                        </span>
                                    ))}
                                </h1>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="btn btn-primary rounded-none px-8 text-white border-none hover:opacity-90">
                                        EXPLORE MORE
                                        <span className="ml-2">›</span>
                                    </button>
                                    <button className="btn btn-ghost rounded-none border border-white/20 px-8 text-white hover:bg-white hover:text-black">
                                        GET DELIVERY
                                        <span className="ml-2">›</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Arrows */}
                <button className="custom-prev absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition hover:bg-primary hover:text-white">
                    ‹
                </button>
                <button className="custom-next absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition hover:bg-primary hover:text-white">
                    ›
                </button>
            </Swiper>
        </div>
    );
}

export default BannerSlider;