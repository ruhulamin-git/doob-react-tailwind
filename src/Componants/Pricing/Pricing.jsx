import React from 'react';
import { Icon } from '@iconify/react';

const Pricing = () => {
    return (
        <>
            <div className="container mb-5 pb-5">
                <div className=" row-auto pt-10 justify-center text-center">
                    <div className='inline-block px-3 py-1 my-5 rounded-md bg-zinc-900'><p className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-600  '>Our Pricing Table</p></div>
                    <h1 className='leading-normal font-bold mb-5 text-4xl text-white'>Business Pricing Plan.</h1>
                </div>


                <div class="w-full flex flex-wrap justify-center pt-5 mt-10 mb-10 ">
                    {/* card 1 */}

                    <div class=" max-w-sm">
                        <div class="flex rounded-lg h-full gap-3 bg-zinc-900 p-8 flex-col text-white">
                            <h1 className='text-4xl font-bold'>Active Plan Mode.</h1>
                            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quisquam.</p>
                            <h1 className=' justify-center text-center text-5xl font-bold'>$129 <span className='text-sm'>/mo</span></h1>
                            <button type="button" className='px-10 py-4  mr-2 mb-2 bg-gradient-to-r from-indigo-600  to-orange-600 font-semibold text-white capitalize  rounded-md'>purchase now</button>
                            <button type="button" className="text-white hover:text-white border-solid border-gray-500 hover:bg-orange-600  rounded-md px-10 py-4 text-center mr-2 mb-2 font-semibold duration-300">Upgrade</button>

                            <div className='flex text-amber-500 justify-center text-lg'>
                                <Icon icon="ion:star" />
                                <Icon icon="ion:star" />
                                <Icon icon="ion:star" />
                                <Icon icon="ion:star" />
                                <Icon icon="ion:star" />
                            </div>
                            <p className='text-slate-400 justify-center'>rated 4.5/5 Stars in 1000+ reviews.</p>
                        </div>
                    </div>
                    { /* card 2 */}
                    <div class=" max-w-sm">
                        <div class=" flex rounded-lg h-full text-white gap-5 bg-zinc-950 p-8 flex-col">
                            <div className='mb-3'>
                                <h1 className='text-2xl font-bold'>Advance Plans You can Get.</h1>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p>5 PPC Campaigns</p>
                                </div>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p> Digital Marketing</p>
                                </div>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p>Marketing Agency</p>
                                </div>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p> Seo Friendly</p>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <h1 className='text-2xl font-bold'>Basic Plans Uou can Get.</h1>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p>5 PPC Campaigns</p>
                                </div>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p> Digital Marketing</p>
                                </div>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p>Marketing Agency</p>
                                </div>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p> Seo Friendly</p>
                                </div>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p>App Development</p>
                                </div>
                                <div className='flex items-center gap-2 text-lg text-slate-400'>
                                    <Icon icon="material-symbols:check" />
                                    <p> Social Development</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Pricing