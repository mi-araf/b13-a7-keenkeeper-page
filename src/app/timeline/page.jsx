'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa6';

import CallImage from '../../../public/assets/call.png';
import TextImage from '../../../public/assets/text.png';
import VideoImage from '../../../public/assets/video.png';

const FILTERS = ['All', 'Call', 'Text', 'Video'];
const imageMap = {
    Call: CallImage,
    Text: TextImage,
    Video: VideoImage,
};

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
};

const TimeLinePage = () => {
    const [filter, setFilter] = useState('All');
    const dropdownRef = useRef(null);

    // Get timeline entries from localStorage
    let entries = [];
    if (typeof window !== 'undefined') {
        try {
            const raw = window.localStorage.getItem('keenkeeper-timeline');
            entries = raw ? JSON.parse(raw) : [];
        } catch (error) {
            console.error('Failed to read timeline entries:', error);
        }
    }

    // Filter entries based on selected filter
    const filteredEntries = filter === 'All' ? entries : entries.filter((entry) => entry.type === filter);

    // Handle filter click and close dropdown
    const handleFilterClick = (option) => {
        setFilter(option);
        setTimeout(() => {
            document.activeElement?.blur();
        }, 0);
    };

    return (
        <div className='bg-[#F8FAFC] min-h-screen'>
            <div className='w-9/12 mx-auto py-18'>
                <h1 className='text-[#1F2937] text-5xl font-bold'>Timeline</h1>

                {/* filter dropdown */}
                <div className='dropdown dropdown-center mt-8'>
                    <div tabIndex={0} ref={dropdownRef} role='button' className='btn p-4 w-78 text-[#64748B] rounded-lg justify-start'>Filter timeline <span className='ml-40'><FaAngleDown /></span>
                    </div>

                    <ul tabIndex={-1} className='dropdown-content menu bg-white rounded-box z-1 w-76 p-4 shadow-lg' >
                        <p className='opacity-50 font-medium text-sm ml-3 my-2'>Filter timeline</p>
                        {
                            FILTERS.map((option, index) => (
                                <li key={index}>
                                    <button type="button" onClick={() => handleFilterClick(option)} className={`text-base font-medium ${filter === option ? "bg-[#244D3F] text-white" : ""}`}>
                                        {option}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='mt-10 space-y-4'>
                    {
                        filteredEntries.length > 0 ? (
                            filteredEntries.map((entry) => {
                                const image = imageMap[entry.type];
                                const [type, ...nameParts] = entry.title.split(' with ');
                                const name = nameParts.join(' with ');
                                
                                return (
                                    <div key={entry.id} className='card bg-white shadow-lg rounded-3xl p-6 border border-[#E9E9E9]'>
                                        <div className='flex items-center gap-4'>
                                            <div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-[#EAF6F1]'>
                                                {
                                                    image && <Image src={image} alt={entry.type} width={30} height={32} />
                                                }
                                            </div>
                                            <div>
                                                <p className='text-[#1F2937] text-lg'>
                                                    <span className='italic font-bold'>{type}</span>
                                                    <span className='font-normal'> with </span>
                                                    <span className='font-bold'>{name}</span>
                                                </p>
                                                <p className='text-[#64748B] text-sm'>{formatDate(entry.date)}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className='card bg-white shadow-lg rounded-3xl p-8 border border-[#E9E9E9]'>
                                <p className='text-[#1F2937] font-semibold text-lg'>No timeline entries yet.</p>
                                <p className='text-[#64748B] mt-2'>Log a Call, Text, or Video check-in from a friend&apos;s details page to see it here.</p>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default TimeLinePage;
