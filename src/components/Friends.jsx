'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Friends = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => { setData(data); setLoading(false) });
    }, []);
    console.log(data);

    if (loading) {
        return (
            <div className="mx-auto py-10 flex justify-center">
                <span className="loading loading-dots loading-xl text-[#244D3F]"></span>
            </div>
        );
    }

    return (
        <div className='mx-auto w-9/12 pt-10 pb-20'>
            <h4 className="font-semibold text-2xl text-[#1F2937] pb-4">Your Friends</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto'>
                {
                    data.map(friend => (
                        <div key={friend.id}>
                            <Link href={`/friend-${friend.id}`} className="hover-3d cursor-pointer">

                                <div className="card w-63 shadow-lg bg-white text-center rounded-xl">
                                    <Image className='rounded-full mx-auto mt-6' src={friend.picture} alt={friend.name} width={80} height={80} />
                                    <div className="card-body pt-3 space-y-2">
                                        <h1 className="text-sm md:text-xl font-semibold text-[#1F2937] mb-1">{friend.name}</h1>
                                        <h6 className='text-[12px] text-[#64748B]'>{friend.days_since_contact}d ago</h6>
                                        <div className='flex gap-2 mx-auto uppercase'>
                                            {
                                                friend.tags.map(tag => (
                                                    <div key={tag}>
                                                        <span className='text-[#244D3F] text-xs font-medium bg-[#CBFADB] rounded-full w-fit mx-auto px-2.5 py-1.5'>{tag}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className='bg-warning w-fit rounded-full mx-auto text-xs text-white font-medium px-2.5 py-1.5'>Almost Due</div>
                                    </div>
                                </div>

                                {/* 8 empty divs needed for the 3D effect */}
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Friends;