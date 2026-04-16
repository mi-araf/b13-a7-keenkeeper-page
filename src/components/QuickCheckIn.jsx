'use client';

import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import CallImage from '../../public/assets/call.png';
import TextImage from '../../public/assets/text.png';
import VideoImage from '../../public/assets/video.png';

const actions = [
    { type: 'Call', label: 'Call', image: CallImage },
    { type: 'Text', label: 'Text', image: TextImage },
    { type: 'Video', label: 'Video', image: VideoImage },
];

const addTimelineEntry = (entry) => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        const existing = window.localStorage.getItem('keenkeeper-timeline');
        const entries = existing ? JSON.parse(existing) : [];
        window.localStorage.setItem('keenkeeper-timeline', JSON.stringify([entry, ...entries]));
    } catch (error) {
        console.error('Failed to save timeline entry:', error);
    }
};

export default function QuickCheckIn({ friendName }) {
    const handleAction = (type) => {
        const now = new Date();
        const entry = {
            id: `${type}-${now.getTime()}`,
            type,
            title: `${type} with ${friendName}`,
            date: now.toISOString(),
        };

        addTimelineEntry(entry);
        toast.success(`${entry.title}`);
    };

    return (
        <>
            <div className='card bg-white shadow-lg rounded-lg p-6'>
                <p className='text-[#244D3F] text-base font-medium md:text-xl'>Quick Check-In</p>
                <div className='mt-4 grid grid-cols-3 gap-4'>
                    {
                        actions.map((action) => (
                            <button key={action.type} type='button' onClick={() => handleAction(action.type)} className='text-center bg-[#F8FAFC] space-y-2 py-4 rounded-lg border border-[#E9E9E9] hover:border-[#359e7b] transition-colors cursor-pointer' >
                                <Image src={action.image} width={32} height={32} alt={action.label} className='mx-auto' />
                                <p className='text-[#1F2937] text-sm md:text-lg'>{action.label}</p>
                            </button>
                        ))}
                </div>
            </div>

            <ToastContainer
                position='top-center'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                pauseOnHover={true}
                // theme='colored'
            />
        </>
    );
}
