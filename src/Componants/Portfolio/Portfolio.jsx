import React from 'react';
import { Icon } from '@iconify/react';

import portfolio1 from '../../assets/Images/portfolio-01.jpg';
import portfolio2 from '../../assets/Images/portfolio-02.jpg';
import portfolio3 from '../../assets/Images/portfolio-03.jpg';
import portfolio4 from '../../assets/Images/portfolio-04.jpg';
import portfolio5 from '../../assets/Images/portfolio-04.jpg';
import portfolio6 from '../../assets/Images/portfolio-06.jpg';
import portfolio7 from '../../assets/Images/portfolio-07.jpg';
import portfolio8 from '../../assets/Images/portfolio-08.jpg';
import portfolio9 from '../../assets/Images/portfolio-01.jpg';

const Portfolio = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="container mb-5 pb-5">
                <div className=" row-auto pt-10 justify-center text-center">
                    <div className='inline-block px-3 py-1 my-5 rounded-md bg-zinc-900'><p className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-600  '>Portfolio Box Layout</p></div>
                    <h1 className='leading-normal font-bold mb-5 text-4xl text-white'>Happily Clients Complete <br />
                        Our Business Project!</h1>
                </div>
                <div className='row-auto'>
                    <div className=''>
                        <ul
                            className=" justify-center flex mb-0 list-none flex-wrap pt-3 flex-row"
                            role="tablist"
                        >
                            <li className="px-3 text-center">
                                <a
                                    className={
                                        "text-lg capitalize py-2 px-5 rounded block " +
                                        (openTab === 1
                                            ? "text-white bg-cyan-400"
                                            : "text-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    All
                                </a>
                            </li>
                            <li className="px-3 text-center">
                                <a
                                    className={
                                        "text-lg capitalize py-2 px-5 rounded block " +
                                        (openTab === 2
                                            ? "text-white bg-cyan-400"
                                            : "text-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Design
                                </a>
                            </li>
                            <li className="px-3 text-center">
                                <a
                                    className={
                                        "text-lg capitalize py-2 px-5 rounded block " +
                                        (openTab === 3
                                            ? "text-white bg-cyan-400"
                                            : "text-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Art
                                </a>
                            </li>
                            <li className=" px-3 text-center">
                                <a
                                    className={
                                        "text-lg capitalize py-2 px-5 rounded block " +
                                        (openTab === 4
                                            ? "text-white bg-cyan-400"
                                            : "text-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(4);
                                    }}
                                    data-toggle="tab"
                                    href="#link4"
                                    role="tablist"
                                >
                                    Development
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className="my-5 py-3">
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio1} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>App Development</h1>
                                    <p className='text-slate-300'>Development</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio2} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Business Development</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio3} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Photoshop Design</h1>
                                    <p className='text-slate-300'>Art</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio4} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Native Application</h1>
                                    <p className='text-slate-300'>Development</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio5} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>React Development</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio6} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>App Installment</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <div className="my-5 py-3">
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio2} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Business Development</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio5} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>React Development</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio6} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>App Installment</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <div className="my-5 py-3">
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio3} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Photoshop Design</h1>
                                    <p className='text-slate-300'>Art</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    <div className="my-5 py-3">
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio1} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>App Development</h1>
                                    <p className='text-slate-300'>Development</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio4} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Native Application</h1>
                                    <p className='text-slate-300'>Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"}>

                    <div className="my-5 py-3">
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio1} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>App Development</h1>
                                    <p className='text-slate-300'>Development</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio2} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Business Development</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio3} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Photoshop Design</h1>
                                    <p className='text-slate-300'>Art</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio4} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Native Application</h1>
                                    <p className='text-slate-300'>Development</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio5} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>React Development</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio6} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>App Installment</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio7} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Design in figma</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio8} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Application Managemnet</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>
                            <div className='rounded bg-zinc-900 w-full'>
                                <img className='rounded' src={portfolio9} alt="" />
                                <div className='px-4 my-5'>
                                    <h1 className='text-white font-bold text-lg'>Creative Business</h1>
                                    <p className='text-slate-300'>Design</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='row-auto flex text-center my-5 justify-center items-center'>

                    <button onClick={e => {
                        e.preventDefault();
                        setOpenTab(5);
                    }}
                        type="button" className='flex  items-center px-10 py-4  mr-2 mb-2 bg-gradient-to-r from-indigo-600  to-orange-600 font-semibold text-white capitalize  rounded-md'>load more<span className=' pl-2'><Icon icon="uiw:loading" /></span></button>

                </div>
            </div>

        </>
    )
}

export default Portfolio