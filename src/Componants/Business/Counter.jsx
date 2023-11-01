import React from 'react';
import CountUp from "react-countup";


export default function Counter({ number, title }) {
    return (
        <div className=" flex flex-col text-4xl">
            <div>
                <CountUp duration={1} className="text-blue-400 font-bold" end={number} /><span className='text-blue-400 font-bold'> +</span>
            </div>
            <span className='text-2xl'>{title}</span>
        </div>
    );
}