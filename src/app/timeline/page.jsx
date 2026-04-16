import React from 'react';
import { FaAngleDown } from "react-icons/fa6";

const TimeLinePage = () => {
    return (
        <div className='bg-[#F8FAFC] '>
            <div className='w-9/12 mx-auto py-18'>
                <h1 className='text-[#1F2937] text-5xl font-bold'>Timeline </h1>

                {/* filter dropdown */}
                <div className="dropdown dropdown-center mt-8">
                    <div tabIndex={0} role="button" className="btn p-4 w-78 text-[#64748B] rounded-lg justify-start">Filter timeline <span className='ml-40'><FaAngleDown /></span> </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-white rounded-box z-1 w-76 p-4 shadow-lg">
                        <p className='opacity-50 font-medium text-sm ml-3 my-2'>Filter timeline</p>
                        <li><a className='text-base font-medium'>All</a></li>
                        <li><a className='text-base font-medium'>Text</a></li>
                        <li><a className='text-base font-medium'>Call</a></li>
                        <li><a className='text-base font-medium'>Video</a></li>
                    </ul>
                </div>

                {/* notifications card */}
            </div>
        </div>
    );
};

export default TimeLinePage;