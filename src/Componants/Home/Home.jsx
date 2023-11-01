import React from 'react';
import { Icon } from '@iconify/react';
import coverimg from '../../assets/Images/bg-image-18.jpg';


const Home = () => {
    return (
        <section className="h-95" style={{
            background: `url(${coverimg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        }}>
            <div className="row-auto pb-20 bg-black  
                 bg-opacity-60">
                <div className="grid-cols-12 px-15 ">
                    <div className="flex flex-col text-center lg:pt-60 md:pt-80 pt-52 gap-5 justify-center ">
                        <h1 className='lg:text-7xl md:text-7xl text-4xl text-white font-bold'>International <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-600'>Business</span> & <span className=' text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-600'>Consulting</span>.</h1>
                        <p className='px-3 text-slate-300 lg:text-xl md:text-xl'>We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>

                        <div className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col justify-center items-center'>
                            <button className=' px-10 py-4  mr-2 mb-2 bg-gradient-to-r from-indigo-600  to-orange-600 font-semibold text-white capitalize  rounded-md'>purchase now</button>
                            <button className=" flex items-center text-white border-solid border-gray-500 rounded-md hover:bg-orange-600  px-10 py-4 text-center mr-2 mb-2 font-semibold">Contact Us <span className='pl-2'> <Icon icon="maki:arrow" /></span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Home