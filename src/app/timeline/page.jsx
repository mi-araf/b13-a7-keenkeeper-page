'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa6';
import { useTimeline } from '@/context/TimelineContext';

import CallImage from '../../../public/assets/call.png';
import TextImage from '../../../public/assets/text.png';
import VideoImage from '../../../public/assets/video.png';

const options = ['All', 'Call', 'Text', 'Video'];
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
    const [search, setSearch] = useState('');
    const dropdownRef = useRef(null);

    const { entries } = useTimeline();
    
    // Filter by type (Call, Text, Video)
    let filteredEntries = filter === 'All' ? entries : entries.filter((entry) => entry.type === filter);
    
    // Filter by search query (friend name or interaction type)
    if (search.trim()) {
        const searchLower = search.toLowerCase();
        filteredEntries = filteredEntries.filter((entry) => {
            const type = entry.type.toLowerCase();
            const friendName = entry.title.split(' with ')[1]?.toLowerCase() || '';
            return type.includes(searchLower) || friendName.includes(searchLower);
        });
    }

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
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='dropdown dropdown-center mt-8'>
                        <div tabIndex={0} ref={dropdownRef} role='button' className='btn p-4 w-78 text-[#64748B] rounded-lg justify-start'>Filter timeline <span className='ml-40'><FaAngleDown /></span>
                        </div>

                        <ul tabIndex={-1} className='dropdown-content menu bg-white rounded-box z-1 w-76 p-4 shadow-lg' >
                            <p className='opacity-50 font-medium text-sm ml-3 my-2'>Filter timeline</p>
                            {
                                options.map((option, index) => (
                                    <li key={index}>
                                        <button type="button" onClick={() => handleFilterClick(option)} className={`text-base font-medium ${filter === option ? "bg-[#244D3F] text-white" : ""}`}>
                                            {option}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* search input */}
                    <div className='mt-8'>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" placeholder="Search by name or type" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </label>
                    </div>
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
