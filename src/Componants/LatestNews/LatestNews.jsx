import React from 'react'
import blog1 from '../../assets/Images/blog-01.jpg';
import blog2 from '../../assets/Images/blog-02.jpg';
import blog3 from '../../assets/Images/blog-03.jpg';

const LatestNews = () => {
    return (
        <>
            <div className="container mb-5 pb-5">
                <div className=" row-auto pt-10 justify-center text-center">
                    <div className='inline-block px-3 py-1 my-5 rounded-md bg-zinc-900'><p className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-600  '>Latests News</p></div>
                    <h1 className='leading-normal font-bold mb-5 text-4xl text-white'>Latest News From The Digital World.</h1>
                </div>
                {/* <div className='border-solid border-b-4 border-red-500 text-white '>New Div</div> */}
                <div className="my-5 py-3">
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 text-white'>
                        <div className='rounded bg-zinc-950 w-full'>
                            <img className='rounded' src={blog1} alt="" />
                            <div className='px-4 my-5'>
                                <p className='text-slate-500 font-thin'><span>Irin Pervin</span> / 10 Dec 2023</p>
                                <h1 className='text-lg font-bold'>Best Corporate Tips You Will Read This Year.</h1>
                            </div>
                        </div>
                        <div className='rounded bg-zinc-950 w-full'>
                            <img className='rounded' src={blog2} alt="" />
                            <div className='px-4 my-5'>
                                <p className='text-slate-500 font-thin'><span>Fatima Asrafy</span> / 30 Nov 2023</p>
                                <h1 className='text-lg font-bold'>Should Fixing Corporate Take 100 Steps.</h1>
                            </div>
                        </div>
                        <div className='rounded bg-zinc-950 w-full'>
                            <img className='rounded' src={blog3} alt="" />
                            <div className='px-4 my-5'>
                                <p className='text-slate-500 font-thin'><span>John Dou</span> / 12 Oct 2023</p>
                                <h1 className='text-lg font-bold'>The Next 100 Things To Immediately Do About.</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LatestNews