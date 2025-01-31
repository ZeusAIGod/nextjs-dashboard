'use client'

import { motion } from 'motion/react'
import ScrollAnimationWrapper from "@/app/test/ScrollAnimationWrapper";
import getScrollAnimation from "./getScrollAnimation";
import { useMemo } from "react";
import Image from "next/image";
import OurAITeam2 from '@/public/assets/Illustration2.png';

const features = [
    "Powerfull online protection",
    "Internet without borders",
    "Supercharged VPN",
    "No specfic time limits."
]

export default function Feature() {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
            <div className="grid grid-flow-row sm:grid-flow-col gird-cols-1 sm:grid-cols-2 gap-8 y-8 my-12">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <Image
                            src={OurAITeam2}
                            alt="Our AI Team 2"
                            layout="responsive"
                            quality={100}
                            height={414}
                            width={508}
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black">
                            We Provide Many Features You Can Use
                        </h3>
                        <p className="my-2 text-black">
                            You can explore the features that we provide with fun and have their
                            own functions Many Features You Can Use
                        </p>
                        <ul className="text-black self-start list-inside ml-8">
                            {
                                features.map((feature, index) => (
                                    <motion.li
                                        className="relative circle-check custom-list"
                                        custom={{duration: 2 + index}}
                                        variants={scrollAnimation}
                                        key={feature}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: {
                                                duration:.2
                                            }
                                        }}
                                    >
                                        {feature}
                                    </motion.li>
                                ))
                            }
                        </ul>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
  }
  