'use client'

import React from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useTimeline } from '@/context/TimelineContext';

const StatsPage = () => {
    const { entries } = useTimeline();
    const counts = { Call: 0, Text: 0, Video: 0 };
    entries.forEach((entry) => {
        if (entry.type in counts) {
            counts[entry.type] += 1;
        }
    });
    const data = [
        { name: 'Call', value: counts.Call, fill: '#204639' },
        { name: 'Text', value: counts.Text, fill: '#7E35E1' },
        { name: 'Video', value: counts.Video, fill: '#37A163' },
    ];
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className='bg-[#F8FAFC]'>
            <div className='w-9/12 mx-auto py-18'>
                <h1 className='text-5xl font-bold text-[#1f2937] mb-6'>Friendship Analytics</h1>

                <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                    <div className='px-8 pt-8'>
                        <p className='font-medium text-base md:text-xl text-[#244D3F]'>By Interaction Type</p>
                    </div>

                    <div className=' p-8'>
                        <div className='h-72'>
                            {total > 0 ? (
                                <ResponsiveContainer width='100%' height='100%'>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            dataKey='value'
                                            cx='50%'
                                            cy='50%'
                                            innerRadius={70}
                                            outerRadius={110}
                                            paddingAngle={3}
                                            cornerRadius={10}
                                        />
                                        <Tooltip />
                                        <Legend layout='horizontal' verticalAlign='bottom' align='center' iconType='circle' />
                                    </PieChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className='h-full flex items-center justify-center text-[#64748B] text-base'>
                                    No interaction done yet
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;