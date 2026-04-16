import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='bg-[#F8FAFC] text-center space-y-4 pt-20'>
            <h2 className="text-5xl text-[#1F2937] font-bold">Friends to keep close in your life</h2>
            <p className='text-base text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <button className="btn bg-[#244D3F] text-white text-semibold text-base mt-3"><FaPlus className='mt-0.5' /> Add a Friend</button>

            <div className='flex flex-wrap justify-center items-center gap-7 my-10'>
                <div className='card shadow-md w-65 rounded-lg p-6 bg-white'>
                    <div className="card-body">
                        <p className='font-semibold text-3xl text-[#244D3F]'>10</p>
                        <p className='text-[#64748B] text-lg'>Total Friends</p>
                    </div>
                </div>
                <div className='card shadow-md w-65 rounded-lg p-6 bg-white'>
                    <div className="card-body">
                        <p className='font-semibold text-3xl text-[#244D3F]'>3</p>
                        <p className='text-[#64748B] text-lg'>On Track</p>
                    </div>
                </div>
                <div className='card shadow-md w-65 rounded-lg p-6 bg-white'>
                    <div className="card-body">
                        <p className='font-semibold text-3xl text-[#244D3F]'>6</p>
                        <p className='text-[#64748B] text-lg'>Need Attention</p>
                    </div>
                </div>
                <div className='card shadow-md w-65 rounded-lg py-6 bg-white'>
                    <div className="card-body">
                        <p className='font-semibold text-3xl text-[#244D3F]'>12</p>
                        <p className='text-[#64748B] text-lg'>Interactions This Month</p>
                    </div>
                </div>
            </div>
            <hr className='text-[#E9E9E9] w-[78%] mx-auto' />
        </div>
    );
};

export default Banner;