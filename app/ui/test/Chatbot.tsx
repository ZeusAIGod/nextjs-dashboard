'use client';

import { useState } from "react";
import Image from 'next/image';
import ChatBot from '@/public/assets/icon/chatbot.svg';
import OIcon from '@/public/assets/icon/OIcon.svg';

export default function Chatbot() {
    const [activeChabot, setActiveChatbot] = useState(false);

    return (
        <>
            <button
                className={
                    "py-5 px-5 bg-gray-300 text-white outline-none rounded-l-full rounded-r-full hover:bg-orange-500 hover:text-white transition-all hover:shadow-lg hover:shadow-orange-500 fixed bottom-10 right-10 " +
                    (activeChabot ? "hidden" : "")
                }
                onClick={() => {setActiveChatbot(true)}}
            >
                <Image src={ChatBot} alt="chatbot" className="h-8 w-auto" />
            </button>
            <div 
                className={
                    "fixed bottom-10 right-10 max-w-md min-w-96 h-96 bg-gray-200 shadow-2xl rounded-2xl z-20 " + 
                    (activeChabot ? "" : "hidden")
                }
                style={{height: "700px"}}
            >
                <div className="px-2 py-4 bg-black gap-x-4 flex flex-row justify-between items-center rounded-t-2xl">
                    <div className="shrink-0">
                        <Image src={OIcon} alt="OIcon" className="h-10 w-auto" />
                    </div>
                    <div className="w-full">
                        <div className="text-xl font-medium text-white">Our AI Team</div>
                        <p className="text-white">AI Chatbot</p>
                    </div>
                    <div className="flex justify-end text-white cursor-pointer" onClick={() => setActiveChatbot(false)}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="h-5 w-5 mb-1 ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col overflow-y-auto p-4 gap-2 flex-1 w-full h-full flex-grow" style={{height: "550px"}}>
                    <div className="flex flex-row w-full gap-2 justify-start items-start">
                        <Image src={OIcon} alt="ChatBot" width="0" height="0" className="rounded-full w-8 h-8" sizes="100vw" />
                        <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-black text-white">
                            Hi there! I'm Alita, what can I help you with today?
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start">
                            <div className="flex flex-col gap-1 items-end">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-blue-400 text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>What is it?</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">8:56 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start  flex-row-reverse">
                            <div className="flex flex-col gap-1  items-start">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-black text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>Alita is an AI-powered virtual assistant designed to enhance healthcare organizations by improving patient acquisition, streamlining operations, and recruiting top talent. It integrates seamlessly with existing systems, offering 24/7 multilingual support, auto-booking, and lead capture to boost efficiency and effectiveness.</p>
                                    </div>
                                </div>
                                <span className="text-xs">
                                    8:56 AM
                                </span>
                            </div>
                            <div className="mb-5">
                                <Image src={OIcon} alt="ChatBot" width="0" height="0" className="rounded-full w-8 h-8" sizes="100vw" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start">
                            <div className="flex flex-col gap-1 items-end">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-blue-400 text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>What is it?</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">8:56 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start  flex-row-reverse">
                            <div className="flex flex-col gap-1  items-start">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-black text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>Alita is an AI-powered virtual assistant designed to enhance healthcare organizations by improving patient acquisition, streamlining operations, and recruiting top talent. It integrates seamlessly with existing systems, offering 24/7 multilingual support, auto-booking, and lead capture to boost efficiency and effectiveness.</p>
                                    </div>
                                </div>
                                <span className="text-xs">
                                    8:56 AM
                                </span>
                            </div>
                            <div className="mb-5">
                                <Image src={OIcon} alt="ChatBot" width="0" height="0" className="rounded-full w-8 h-8" sizes="100vw" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start">
                            <div className="flex flex-col gap-1 items-end">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-blue-400 text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>What is it?</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">8:56 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start  flex-row-reverse">
                            <div className="flex flex-col gap-1  items-start">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-black text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>Alita is an AI-powered virtual assistant designed to enhance healthcare organizations by improving patient acquisition, streamlining operations, and recruiting top talent. It integrates seamlessly with existing systems, offering 24/7 multilingual support, auto-booking, and lead capture to boost efficiency and effectiveness.</p>
                                    </div>
                                </div>
                                <span className="text-xs">
                                    8:56 AM
                                </span>
                            </div>
                            <div className="mb-5">
                                <Image src={OIcon} alt="ChatBot" width="0" height="0" className="rounded-full w-8 h-8" sizes="100vw" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start">
                            <div className="flex flex-col gap-1 items-end">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-blue-400 text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>What is it?</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">8:56 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start  flex-row-reverse">
                            <div className="flex flex-col gap-1  items-start">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-black text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>Alita is an AI-powered virtual assistant designed to enhance healthcare organizations by improving patient acquisition, streamlining operations, and recruiting top talent. It integrates seamlessly with existing systems, offering 24/7 multilingual support, auto-booking, and lead capture to boost efficiency and effectiveness.</p>
                                    </div>
                                </div>
                                <span className="text-xs">
                                    8:56 AM
                                </span>
                            </div>
                            <div className="mb-5">
                                <Image src={OIcon} alt="ChatBot" width="0" height="0" className="rounded-full w-8 h-8" sizes="100vw" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start">
                            <div className="flex flex-col gap-1 items-end">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-blue-400 text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>What is it?</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">8:56 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row w-full gap-2 justify-end items-start  flex-row-reverse">
                            <div className="flex flex-col gap-1  items-start">
                                <div className="p-2 rounded-[10px] max-w-xs whitespace-pre-wrap bg-black text-white">
                                    <div className="rounded-[10px] max-w-xs whitespace-pre-wrap">
                                        <p>Alita is an AI-powered virtual assistant designed to enhance healthcare organizations by improving patient acquisition, streamlining operations, and recruiting top talent. It integrates seamlessly with existing systems, offering 24/7 multilingual support, auto-booking, and lead capture to boost efficiency and effectiveness.</p>
                                    </div>
                                </div>
                                <span className="text-xs">
                                    8:56 AM
                                </span>
                            </div>
                            <div className="mb-5">
                                <Image src={OIcon} alt="ChatBot" width="0" height="0" className="rounded-full w-8 h-8" sizes="100vw" />
                            </div>
                        </div>
                    </div>
                </div>
                <form className="p-3 flex flex-row gap-3 items-end my-2 border border-t-black rounded-b-2xl ">
                    <textarea 
                        rows={1}
                        placeholder="Type a message in any language" 
                        className="flex-1 border-2 rounded-[10px] px-4 py-2 focus:outline-none bg-white/10 placeholder-opacity-70 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-sm w-full resize-none overflow-y-hidden"
                        // style={{borderColor: "rgb(17, 24, 39)"}}
                    >
                    </textarea>
                    <button type="submit">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="h-8 w-8 mb-1" color="#111827" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(17, 24, 39)"}}>
                            <path d="M227.57,27.7a7,7,0,0,0-7.13-1.22L17.78,105.79a12.23,12.23,0,0,0,2.1,23.39L74,139.81V200a14,14,0,0,0,24.08,9.71l26.64-27.63,41.58,36.45a13.9,13.9,0,0,0,9.2,3.49,14.33,14.33,0,0,0,4.36-.69,13.86,13.86,0,0,0,9.34-10.17L229.82,34.57A7,7,0,0,0,227.57,27.7ZM22.05,117.37h0a.46.46,0,0,1,0-.32.51.51,0,0,1,.15-.08L181.91,54.45l-103.3,74L22.2,117.41Zm67.39,84A2,2,0,0,1,86,200V148.11l29.69,26Zm88.07,7.08a1.93,1.93,0,0,1-1.34,1.44,2,2,0,0,1-2-.4L89.64,135.34,215,45.5Z"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}
