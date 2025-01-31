'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

export default function Hero({
    listTestimoni = [
        {
            name: "iezh Robert",
            image: "/assets/people-3.png",
            city: "Warsaw",
            country: "Poland",
            rating: "4.5",
            testimoni:
              "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
        },
        {
            name: "iezh Robert",
            image: "/assets/people-3.png",
            city: "Warsaw",
            country: "Poland",
            rating: "4.5",
            testimoni:
              "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
        },
        {
            name: "iezh Robert",
            image: "/assets/people-3.png",
            city: "Warsaw",
            country: "Poland",
            rating: "4.5",
            testimoni:
              "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
        },
        {
            name: "iezh Robert",
            image: "/assets/people-3.png",
            city: "Warsaw",
            country: "Poland",
            rating: "4.5",
            testimoni:
              "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
        },
    ],
}) {
    const settings = {
        dots: true,
        customPaging: function () {
            return (
                <a className="">
                    <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
                </a>
            );
        },
        dotsClass: "slick-dots w-max absolute mt-20  ",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
        {
            breakpoint: 770,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        ],
    };
    // let sliderRef = useRef<Slider>(null);

    // const [ sliderRef, setSliderrRef ] = useState(null);

    // const previous = () => {
    //     sliderRef.slickPrev();
    // }

    return (
        <>
            <Slider
                // ref={ setSliderrRef }
                {...settings}
                arrows={false}
                className='flex items-stretch justify-items-stretch'
            >
                {listTestimoni.map((listTestimonis, index) => (
                    <div className="px-3 flex items-stretch" key={index}>
                        <div className="border-2 border-gray-200 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                <div className="flex order-2 xl:order-1">
                                <Image
                                    src={listTestimonis.image}
                                    height={50}
                                    width={50}
                                    alt="Icon People"
                                />
                                <div className="flex flex-col ml-5 text-left">
                                    <p className="text-lg text-black-600 capitalize">
                                    {listTestimonis.name}
                                    </p>
                                    <p className="text-sm text-black-500 capitalize">
                                    {listTestimonis.city},{listTestimonis.country}
                                    </p>
                                </div>
                                </div>
                                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                                <p className="text-sm">{listTestimonis.rating}</p>
                                <span className="flex ml-4">
                                    <Image src="/assets/Icon/stars.svg" className="h-4 w-4" width="0" height="0" sizes="100vw" alt="" />
                                </span>
                                </div>
                            </div>
                            <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <div className='flex w-full items-center justify-end'>
                <div className='flex flex-none justify-between w-auto mt-14'>
                    <div
                        className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white text-orange-500 border-orange-500 border hover:bg-orange-500 hover:text-white cursor-pointer transition-all "
                        onClick={sliderRef?.slickPrev}
                    >
                        <Image src="/assets/Icon/eva_arrow-back-fill.svg" className='h-6 w-6' width="0" height="0" sizes="100vw" alt="" />
                    </div>
                    <div
                        className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white transition-all text-orange-500 cursor-pointer"
                        onClick={sliderRef?.slickNext}
                    >
                        <Image src="/assets/Icon/eva_arrow-next-fill.svg" className='h-6 w-6' width="0" height="0" sizes="100vw" alt="" />
                    </div>
                </div>
            </div> */}
        </>
    )
}