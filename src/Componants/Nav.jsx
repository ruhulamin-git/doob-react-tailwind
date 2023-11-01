import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';



const Nav = () => {
    let Links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Elements', link: '/' },
        { name: 'Blog', link: '/' },
        { name: 'Portfolio', link: '/' },
        { name: 'Contact', link: '/' }
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='w-full fixed top-0 left-0'>
            <div className='md:flex bg-black py-4 pl-9 md:px-8 items-center  justify-between'>
                <img className='h-12 md:h-10 sm:h-8' src={logo} alt="" />
                <div onClick={() => setOpen(!open)} className='text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
                </div>
                <ul className={` md:flex md:items-center md:pb-0 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'left-0' : 'left-[-768px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='lg:ml-8 md:ml-4 md:text-base md:my-0 my-7'>
                                <a href={link.link} className='text-slate-300 hover:text-blue-500 duration-200'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <button className="hidden md:block bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white uppercase  rounded-md">buy now</button>


            </div>

        </div >
    )
}

export default Nav