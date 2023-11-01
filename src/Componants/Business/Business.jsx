import React from 'react';
import Counter from './Counter';


import service1 from '../../assets/Images/service-01.jpg';
import service2 from '../../assets/Images/service-02.jpg';
import service3 from '../../assets/Images/service-03.jpg';
import service4 from '../../assets/Images/service-04.jpg';
import split01 from '../../assets/Images/split-01.jpg';
import split02 from '../../assets/Images/split-02.jpg';


const Business = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="container">
                <div className="row-auto pt-10 pb-10 justify-center text-center">
                    <div className='inline-block px-3 py-1 my-5 rounded-md bg-zinc-900'><p className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-600  '>Business Stratagy</p></div>
                    <h1 className='font-bold mb-5 text-4xl text-white'>Our Business Stratagy Here.</h1>

                </div>
                <div className="row-auto">
                    <div className="flex flex-wrap">
                        <div className="grid w-full">
                            <ul
                                className=" flex mb-0 list-none flex-wrap pt-3 flex-row"
                                role="tablist"
                            >
                                <li className="-mb-px mr-2 last:mr-0 text-center">
                                    <a
                                        className={
                                            "text-lg capitalize px-10 py-5 block " +
                                            (openTab === 1
                                                ? "text-white bg-zinc-900"
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
                                        Stategy
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 text-center">
                                    <a
                                        className={
                                            "text-lg capitalize px-10 py-5 block " +
                                            (openTab === 2
                                                ? "text-white bg-zinc-900"
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
                                        Development
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 text-center">
                                    <a
                                        className={
                                            "text-lg capitalize px-10 py-5 block " +
                                            (openTab === 3
                                                ? "text-white bg-zinc-900"
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
                                        Reporting
                                    </a>
                                </li>


                            </ul>
                            <div className=" flex flex-col min-w-0 break-words text-white bg-zinc-900 w-full mb-6 shadow-lg rounded">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="tab-content tab-space">
                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                            <div className="row-auto flex flex-col lg:flex-row w-full gap-5">
                                                <div className='lg:w-1/3 md:w-full'>
                                                    <div className=" w-full">
                                                        <div className='px-3 py-3 grid gap-5 '>
                                                            <h1 className='text-2xl font-bold'>How can we help you?</h1>
                                                            <p className='text-slate-400 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem reprehenderit asperiore</p>
                                                            <div>
                                                                <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col md:flex-row gap-5'>
                                                    <div className='bg-black px-2 py-2 rounded  w-full md:w-1/2'>
                                                        <div class="px-3 py-3 grid gap-4 max-w-sm rounded overflow-hidden shadow-lg">
                                                            <div className='rounded'>
                                                                <img class="w-full" src={service1} alt="" />
                                                            </div>
                                                            <div class="font-bold text-xl ">Awarded Design</div>
                                                            <p class="text-slate-500 text-base">
                                                                There are many variations variats of passages of Lorem Ipsum available.
                                                            </p>
                                                            <div>
                                                                <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='bg-black px-2 py-2 rounded w-full  md:w-1/2 '>
                                                        <div class="px-3 py-3 grid gap-4 max-w-sm rounded overflow-hidden shadow-lg">
                                                            <div className='rounded'>
                                                                <img class="w-full" src={service2} alt="" />
                                                            </div>
                                                            <div class="font-bold text-xl ">Design & Creative</div>
                                                            <p class="text-slate-500 text-base">
                                                                Passages there are many variatin Lorem Ipsum available have suffered.
                                                            </p>
                                                            <div>
                                                                <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                            <div className="row-auto flex flex-col lg:flex-row w-full gap-5">
                                                <div className='lg:w-1/3 md:w-full'>
                                                    <div className="  w-full">
                                                        <div className='px-3 py-3 grid gap-5 '>
                                                            <h1 className='text-2xl font-bold'>Whice Service Provided?</h1>
                                                            <p className='text-slate-400 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ea sint nihil corrupti! Harum nemo eius odio.</p>
                                                            <div>
                                                                <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col md:flex-row gap-5'>
                                                    <div className='bg-black px-2 py-2 rounded  w-full md:w-1/2'>
                                                        <div class="px-3 py-3 grid gap-4 max-w-sm rounded overflow-hidden shadow-lg">
                                                            <div className='rounded'>
                                                                <img class="w-full" src={service3} alt="" />
                                                            </div>
                                                            <div class="font-bold text-xl ">App Development</div>
                                                            <p class="text-slate-500 text-base">
                                                                There are many variations variats of passages of Lorem Ipsum available.
                                                            </p>
                                                            <div>
                                                                <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='bg-black px-2 py-2 rounded  w-full md:w-1/2'>
                                                        <div class="px-3 py-3 grid gap-4 max-w-sm rounded overflow-hidden shadow-lg">
                                                            <div className='rounded'>
                                                                <img class="w-full" src={service4} alt="" />
                                                            </div>
                                                            <div class="font-bold text-xl ">Business Design</div>
                                                            <p class="text-slate-500 text-base">
                                                                Passages there are many variatin Lorem Ipsum available have suffered.
                                                            </p>
                                                            <div>
                                                                <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                            <div className="row-auto  md:flex-col  grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">

                                                <div className='bg-black px-2 py-2 rounded  w-full'>
                                                    <div class="px-3 py-3 grid gap-4 max-w-sm rounded overflow-hidden shadow-lg">
                                                        <div className='rounded'>
                                                            <img class="w-full" src={service1} alt="" />
                                                        </div>
                                                        <div class="font-bold text-xl ">App Development</div>
                                                        <p class="text-slate-500 text-base">
                                                            There are many variations variats of passages of Lorem Ipsum available.
                                                        </p>
                                                        <div>
                                                            <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='bg-black px-2 py-2 rounded  w-full'>
                                                    <div class="px-3 py-3 grid gap-4 max-w-sm rounded overflow-hidden shadow-lg">
                                                        <div className='rounded'>
                                                            <img class="w-full" src={service2} alt="" />
                                                        </div>
                                                        <div class="font-bold text-xl ">Business Design</div>
                                                        <p class="text-slate-500 text-base">
                                                            There are many variations variats of passages of Lorem Ipsum available.
                                                        </p>
                                                        <div>
                                                            <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bg-black px-2 py-2 rounded  w-full'>
                                                    <div class="px-3 py-3 grid gap-4 max-w-sm rounded overflow-hidden shadow-lg">
                                                        <div className='rounded'>
                                                            <img class="w-full" src={service3} alt="" />
                                                        </div>
                                                        <div class="font-bold text-xl ">Business Design</div>
                                                        <p class="text-slate-500 text-base">
                                                            Passages there are many variatin Lorem Ipsum available have suffered.
                                                        </p>
                                                        <div>
                                                            <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-5 py-2.5 text-sm font-semibold text-white capitalize rounded-md">read more</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-10">
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5'>
                    <div className="w-full lg:-ml-10 lg:my-5 lg:pb-10">
                        <img src={split01} alt="" />
                    </div>
                    <div className="w-full lg:mx-10  grid lg:gap-5 md:gap-5 text-white lg:leading-8 md:py-5 ">
                        <h1 className='text-4xl font-bold'>What is DOOB?</h1>
                        <p className='text-slate-400 '>Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even . <br />

                            <span className='text-lg pt-5 grid leading-8'>- Doug DeMarco, Design Prototyping Manager <br />
                                - 108 million paying subscribers <br />
                                - Over 1.7 billion hours of music played monthly <br />
                                - 4,000+ employees working across 16 offices</span></p>
                        <div>
                            <button className=" bg-gradient-to-r from-indigo-600  to-orange-600 px-8 py-3 text-base font-semibold text-white capitalize rounded-md">contact with us</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container pb-3 mb-5  bg-zinc-900">
                <div className='lg:grid lg:grid-cols-2 md:grid-cols-1 flex flex-col-reverse  gap-4 '>
                    <div className="w-full mr-10 ">
                        <div className='my-5 px-5 lg:py-5 md:py-5 sm:py-1 grid gap-5 text-white leading-6'>
                            <h1 className='text-4xl font-bold'>Continue Your Business With Us.</h1>
                            <p className='text-slate-400 '>Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even . </p>

                            <div className="row-auto lg:pt-5 md:pt-5 sm:pt-0">
                                <div className="grid grid-cols-2 gap-5">
                                    <Counter number={199} title="Happy Clients" />
                                    <Counter number={575} title="Employees" />
                                    <Counter number={69} title="Useful Programs" />
                                    <Counter number={500} title="Useful Programs" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="ative w-full -mr-10 my-10 ">
                        <img src={split02} alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Business;




