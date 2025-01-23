import Image from 'next/image';
import LogoImg from '@/public/assets/Logo.svg';
import FacebookImg from '@/public/assets/facebook.svg';
import TwitterImg from '@/public/assets/twitter.svg';
import InstagramImg from '@/public/assets/instagram.svg';

export default function Footer() {
    return (
        <div className='bg-white pt-44 pb-24'>
            <div className='max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row-col grid-cols-3 sm:grid-cols-12 gap-4'>
                <div className='row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start '>
                    <div className='flex w-full mt-2 mb-8 -mx-2 justify-left items-center'>
                        <Image src={LogoImg} alt={"Logo"} className='h-12 w-auto ml-1' />
                        <p className='text-blue-400'>Our AI Team</p>
                    </div>
                    <p className='mb-4'>
                        <strong className='font-medium'>Our AI Team</strong> is a private
                        virtual network that has unique features and has high security.
                    </p>
                    <div className='flex w-full mt-2 mb-8 -mx-2'>
                        <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
                            <Image src={FacebookImg} alt={'facebook'} className='h-6 w-6' />
                        </div>
                        <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
                            <Image src={TwitterImg} alt={'twitter'} className='h-6 w-6' />
                        </div>
                        <div className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'>
                            <Image src={InstagramImg} alt={'instagram'} className='h-6 w-6' />
                        </div>
                    </div>
                    <p className='text-gray-400'>@{new Date().getFullYear()} - Our AI Team</p>
                </div>
                <div className=' row-span-2 sm:col-span-2 sm:col-start7 sm:col-end-9 flex flex-col'>
                    <p className='text-black-600 mb-4 font-medium text-lg'>Product</p>
                    <ul className='text-black-500'>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Download{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Pricing{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Locations{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Server{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Countries{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Blog{" "}
                        </li>
                    </ul>
                </div>
                <div className=' row-span-2 sm:col-span-2 sm:col-start9 sm:col-end-11 flex flex-col'>
                    <p className='text-black-600 mb-4 font-medium text-lg'>Engage</p>
                    <ul className='text-black-500'>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            AI?{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            FAQ{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Tutorial{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            About US{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Privacy Policy{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Terms of Service{" "}
                        </li>
                    </ul>
                </div>
                <div className=' row-span-2 sm:col-span-2 sm:col-start11 sm:col-end-13 flex flex-col'>
                    <p className='text-black-600 mb-4 font-medium text-lg'>Earn Money</p>
                    <ul className='text-black-500'>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Affiliate{" "}
                        </li>
                        <li className='my-2 hover:text-orange-500 cursor-pointer transition-all'>
                            Become Partner{" "}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
