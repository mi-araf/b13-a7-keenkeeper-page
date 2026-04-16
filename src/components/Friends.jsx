import React from 'react';

const Friends = async () => {
    const res = await fetch('/public/friends.json');
    const data = await res.json();
    console.log(data);

    return (
        <div className='w-9/12 mx-auto'>
            <h4 className="font-semibold text-2xl text-[#1F2937] pb-4">Your Friends</h4>
        </div>
    );
};

export default Friends;