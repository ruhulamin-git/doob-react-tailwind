import React from 'react';
import { Icon } from '@iconify/react';
import logo from '../../assets/Images/logo.png';


const Footer = () => {
    return (
        <>
            <footer>
                <div class="bg-black  
                 bg-opacity-60 py-5 text-gray-400">
                    <div class="container px-5 mx-auto ">
                        <div className='sm:grid-cols-1 grid lg:px-5 md:px-5 py-10 lg:flex md:flex justify-between items-center'>
                            <div class="flex-col px-4 leading-8">
                                <img className='w-40' src={logo} alt="" />
                                <p class="pt-3">
                                    If you want to create a corporate template you can <br /> purshace now our doob template.
                                </p>

                            </div>
                            <div className='px-4'>
                                <button type="button" className=' flex items-center px-7 py-4  mr-2 mb-2 bg-gradient-to-r from-indigo-600  to-orange-600 font-semibold text-white capitalize  rounded-md'>Purchase Doob <span className='pl-2'> <Icon icon="maki:arrow" /></span></button>
                            </div>
                        </div>
                        <div class="lg:px-5 md:px-5 lg:flex md:flex sm:grid-cols-1 grid  justify-between">
                            <div class="px-4 my-4 w-full sm:w-auto">
                                <h2 class="inline-block text-lg text-white font-bold pb-3">Services</h2>
                                <ul class="leading-8 text-sm border-b-2 border-blue-600">
                                    <li><a href="#" class="hover:text-blue-400">About Us</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Terms &amp; Conditions</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Portfolio</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Service</a></li>
                                </ul>
                            </div>
                            <div class="px-4 my-4 w-full sm:w-auto">
                                <h2 class="inline-block text-lg text-white font-bold pb-3">Solutions</h2>
                                <ul class="leading-8 text-sm border-b-2 border-blue-600">
                                    <li><a href="#" class="hover:text-blue-400">About Us</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Terms &amp; Conditions</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="px-4 my-4 w-full sm:w-auto">
                                <h2 class="inline-block text-lg text-white font-bold pb-3">Company</h2>
                                <ul class="leading-8 text-sm border-b-2 border-blue-600">
                                    <li><a href="#" class="hover:text-blue-400">About Us</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Terms &amp; Conditions</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Portfolio</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Service</a></li>
                                </ul>
                            </div>
                            <div class="px-4 my-4 w-full sm:w-auto">
                                <h2 class="inline-block text-lg text-white font-bold pb-3">Resources</h2>
                                <ul class="leading-8 text-sm border-b-2 border-blue-600">
                                    <li><a href="#" class="hover:text-blue-400">About Us</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Terms &amp; Conditions</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
                                    <li><a href="#" class="hover:text-blue-400">Contact Us</a></li>
                                </ul>
                            </div>

                            <div class="px-4 my-4 w-full sm:w-auto lg:w-1/5">
                                <h2 class="inline-block text-xl text-white font-bold pb-4 border-b-4 border-blue-600">Stay With Us.</h2>
                                <p>2000+ Our clients are subscribe Around the World</p>

                                <div className='text-white text-3xl justify-between items-center mt-3 flex gap-3 '>
                                    <a href="#" class=" inline-flex items-center justify-center bg-slate-800 hover:bg-sky-600 rounded-full p-1">
                                        <Icon icon="mingcute:facebook-fill" />
                                    </a>
                                    <a href="#" class="inline-flex items-center justify-center bg-slate-800 hover:bg-sky-600 rounded-full p-1">
                                        <Icon icon="mdi:twitter" />
                                    </a>
                                    <a href="#" class="inline-flex items-center justify-center bg-slate-800 hover:bg-sky-600 rounded-full p-1">
                                        <Icon icon="ri:instagram-line" />
                                    </a>
                                    <a href="#" class="inline-flex items-center justify-center bg-slate-800 hover:bg-sky-600 rounded-full p-1">
                                        <Icon icon="mdi:linkedin" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class=" py-4 px-5 text-gray-100">
                    <div class="container mx-auto px-4 ">
                        <div class="sm:grid-cols-1 grid lg:-mx-4 lg:px-4 lg:flex  md:flex justify-between items-center text-slate-400">
                            <ul class=" lg:px-4 md:px-4  flex lg:gap-3 md:gap-3 lg:leading-8 md:leading-6 text-sm ">
                                <li className='pr-1'><a href="#" class="hover:text-blue-400">Private Policy</a></li>
                                <li className='pr-1'><a href="#" class="hover:text-blue-400">Terms &amp; Conditions</a></li>
                                <li><a href="#" class="hover:text-blue-400">Contact Us</a></li>

                            </ul>
                            <div class="px-4 w-full text-center text-sm sm:w-auto sm:text-left">
                                © Doob 2023
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer