'use client'

import ButtonPrimary from "@/app/ui/test/ButtonPrimary";
import { motion } from 'motion/react'
import ScrollAnimationWrapper from "@/app/test/ScrollAnimationWrapper";
import getScrollAnimation from "./getScrollAnimation";
import { useMemo } from "react";
import Image from "next/image";
import OurAITeam1 from '@/public/assets/Illustration1.png';
import User_icon from '@/public/assets/heroicons_sm-user.svg';
import Location_icon from '@/public/assets/gridicons_location.svg';
import Server_icon from '@/public/assets/bx_bxs-server.svg';

export default function Hero({
    listUser = [
        {
            name: "Users",
            number: "390",
            icon: User_icon
        },
        {
            name: "Locations",
            number: "20",
            icon: Location_icon
        },
        {
            name: "Server",
            number: "50",
            icon: Server_icon
        }
    ]
}) {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
            <ScrollAnimationWrapper>
                <motion.div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                    variants={scrollAnimation}
                >
                    <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-back-600 leading-normal">
                            Want anything to be easy with <strong>Our AI Team</strong>
                        </h1>
                        <p className="text-black-500 mt-4 mb-6">
                            Provide a network for all your needs with ease and fun using
                            Our AI Team discover interesting features from us. 
                        </p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                    <div className="flex w-full">
                        <motion.div className="h-full w-full" variants={scrollAnimation}>
                            <Image
                                src={OurAITeam1}
                                alt="Our AI Team 1"
                                quality={100}
                                width={612}
                                height={383}
                                layout="responsive"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>
            <div className="relative w-full flex">
                <ScrollAnimationWrapper
                    className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-2 divide-gray-100 bg-white z-10"
                    // className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-2 divide-gray-100 bg-white"
                >
                    {listUser.map((listUsers, index) => (
                        <motion.div
                            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                            key={index}
                            custom={{duration: 2 + index}}
                            variants={scrollAnimation}
                        >
                            <div className="flex mx-auto w-40 sm:w-auto">
                                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                                    <Image src={listUsers.icon} className="h6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl text-black-600 font-bold">
                                        {listUsers.number} +
                                    </p>
                                    <p className="text-lg text-black">{listUsers.name}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
  }
  