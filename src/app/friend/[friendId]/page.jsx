import React from 'react';
import friendsJSON from '../../../../public/friends.json';
import NotFound from '../NotFound';
import Image from 'next/image';
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import Call from '../../../../public/assets/call.png';
import Text from '../../../../public/assets/text.png';
import Video from '../../../../public/assets/video.png';


const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
};

const FriendDetailPage = async ({ params }) => {
    const { friendId } = await params;
    console.log(friendId, 'params');

    const friend = friendsJSON.find(eachFriend => eachFriend.id == (friendId));
    console.log(friend, 'friend');

    if (!friend) {
        return <NotFound />;
    }

    return (
        <div className='bg-[#F8FAFC] '>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-10/12 mx-auto py-18'>

                {/* left content */}
                <div className='col-span-1 md:col-span-2 lg:col-span-2 space-y-4'>
                    {/* friend card */}
                    <div className="card shadow-lg bg-white text-center rounded-lg ">
                        <Image className='rounded-full mx-auto mt-7' src={friend.picture} alt={friend.name} width={80} height={80} />
                        <div className="card-body pt-4 space-y-2">
                            <h1 className="text-sm md:text-xl font-semibold text-[#1F2937] mb-1">{friend.name}</h1>

                            <div className={`w-fit rounded-full mx-auto text-xs text-white font-medium px-2.5 py-1.5 ${friend.status === 'overdue'
                                ? 'bg-[#EF4444]'
                                : friend.status === 'on-track'
                                    ? 'bg-[#244D3F]'
                                    : friend.status === 'almost_due'
                                        ? 'bg-[#EFAD44]'
                                        : ''}`}>
                                {
                                    friend.status === 'overdue'
                                        ? 'Overdue'
                                        : friend.status === 'on-track'
                                            ? 'On-Track'
                                            : friend.status === 'almost_due'
                                                ? 'Almost Due'
                                                : ''
                                }
                            </div>
                            <div className='flex gap-2 mx-auto uppercase'>
                                {
                                    friend.tags.map(tag => (
                                        <div key={tag}>
                                            <span className='text-[#244D3F] text-xs font-medium bg-[#CBFADB] rounded-full w-fit mx-auto px-2.5 py-1.5'>{tag}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <p className='text-xs font-medium text-[#64748B] md:text-sm italic'>&ldquo;{friend.bio}&rdquo;</p>
                            <p className='text-[#64748B] text-xs'>{friend.email}</p>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <button className='btn border-[#E9E9E9] py-4 bg-white w-full'><HiOutlineBellSnooze className='mt-px' /> Snooze 2 weeks</button>
                        <button className='btn border-[#E9E9E9] py-4 bg-white w-full'><FiArchive />Archive</button>
                        <button className='btn btn-outline border-[#E9E9E9] py-4 bg-white btn-error w-full'><RiDeleteBin6Line /> Delete</button>
                    </div>
                </div>

                {/* right content */}
                <div className='col-span-1 md:col-span-2 lg:col-span-3'>

                    {/* stats cards -> show 3 cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className="col-span-1 card shadow-lg bg-white text-center rounded-lg py-6 space-y-2">
                            <h2 className='text-[#244D3F] font-semibold text-xl md:text-3xl'>{friend.days_since_contact}</h2>
                            <p className='text-[#64748B] text-sm md:text-lg'>Days Since Contact</p>
                        </div>
                        <div className="col-span-1 card shadow-lg bg-white text-center rounded-lg py-6 space-y-2">
                            <h2 className='text-[#244D3F] font-semibold text-xl md:text-3xl'>{friend.goal}</h2>
                            <p className='text-[#64748B] text-sm md:text-lg'>Goal (Days)</p>
                        </div>
                        <div className="col-span-1 card shadow-lg bg-white text-center rounded-lg py-6 space-y-2">
                            <h2 className='text-[#244D3F] font-semibold text-xl md:text-3xl'>{formatDate(friend.next_due_date)}</h2>
                            <p className='text-[#64748B] text-sm md:text-lg'>Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Card: */} 
                    <br />
                    <div className=' card bg-white shadow-lg rounded-lg p-6'>
                        <div className='text-[#244D3F] text-base font-medium md:text-xl inline-flex justify-between w-full'>Relationship Goal <span className='justify-end'>
                            <button className="btn -mt-2 text-xs md:text-sm">Edit</button></span>
                        </div>
                        <div className='text-[#64748B] text-sm md:text-lg mt-4'>Connect every <span className='font-bold'>{friend.goal} days</span></div>
                    </div>

                    {/* Chech In Card */}  
                    <br />
                    <div className='card bg-white shadow-lg rounded-lg p-6'>
                        <p className='text-[#244D3F] text-base font-medium md:text-xl'>Quick Check-In</p>
                        <div className='mt-4 grid grid-cols-3 gap-4'>
                            <div className='text-center bg-[#F8FAFC] space-y-2 py-4 rounded-lg border border-[#E9E9E9]'>
                                <Image src={Call} width={32} height={32} alt="call.png" className='mx-auto' />
                                <p className='text-[#1F2937] text-sm md:text-lg'>Call</p>
                            </div>
                            <div className='text-center bg-[#F8FAFC] space-y-2 py-4 rounded-lg border border-[#E9E9E9]'>
                                <Image src={Text} width={32} height={32} alt="text.png" className='mx-auto' />
                                <p className='text-[#1F2937] text-sm md:text-lg'>Call</p>
                            </div>
                            <div className='text-center bg-[#F8FAFC] space-y-2 py-4 rounded-lg border border-[#E9E9E9]'>
                                <Image src={Video} width={32} height={32} alt="video.png" className='mx-auto' />
                                <p className='text-[#1F2937] text-sm md:text-lg'>Call</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailPage;