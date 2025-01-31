'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { Link as LinkScroll } from 'react-scroll';
import Image from 'next/image';
import LogoVPN from '@/public/assets/Logo.svg';

export default function Header() {
    const [activeLink, setActiveLink] = useState("");
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);

    return (
        <header
            className={
                "fixed top-0 w-full z-30 bg-white transition-all " +
                (scrollActive ? "shadow-md pt-0" : " pt-4")
            }
        >
            <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                <div className="col-start-1 col-end-2 flex items-center">
                    <Image src={LogoVPN} alt={""} className='h-12 w-auto' />
                    <p className='text-blue-400 ml-1'>Our AI Team</p>
                </div>
                <ul className='hidden lg:flex col-start-4 col-end-8 text-black items-center'>
                    <LinkScroll
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("about");
                        }}
                        className={
                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                            (activeLink === "about"
                                ? " text-orange-500 animation-active "
                                : " text-black hover:text-orange-500 a")
                        }
                        // className='px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-oragne-500 hover:text-orange-500 a'
                    >
                        About
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="feature"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("feature");
                        }}
                        className={
                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                            (activeLink === "feature"
                                ? " text-orange-500 animation-active "
                                : " text-black hover:text-orange-500 ")
                        }
                    >
                        Feature
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="pricing"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("pricing");
                        }}
                        className={
                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                            (activeLink === "pricing"
                                ? " text-orange-500 animation-active "
                                : " text-black hover:text-orange-500 ")
                        }
                    >
                        Pricing
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="testimoni"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("testimoni");
                        }}
                        className={
                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                            (activeLink === "testimoni"
                                ? " text-orange-500 animation-active "
                                : " text-black hover:text-orange-500 ")
                        }
                    >
                        Testimonial
                    </LinkScroll>
                </ul>
                <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                    <Link href='/' className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                        Sign In
                    </Link>
                    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full hover:bg-orange-500 hover:text-white transition-all hover:shadow-lg hover:shadow-orange-500">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    )
}
