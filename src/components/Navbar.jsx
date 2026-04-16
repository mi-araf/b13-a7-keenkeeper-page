'use client'

import Link from 'next/link';
import React from 'react';
import { RiHome3Line } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname();

    const links = <>
        <li><Link href="/" className={pathname === '/' ? 'bg-[#244D3F] text-white px-3' : ''}><RiHome3Line className='mt-0.5' />Home</Link></li>
        <li><Link className={pathname === '/timeline' ? 'bg-[#244D3F] text-white px-3' : ''} href="/timeline"><MdOutlineAccessTime className='mt-0.5' />Timeline</Link></li>
        <li><Link className={pathname === '/stats' ? 'bg-[#244D3F] text-white px-3' : ''} href="/stats"><GoGraph className='mt-0.5' />Stats</Link></li>
    </>

    return (
        <div className='shadow-xl'>
            <div className="navbar bg-base-100 w-11/12 mx-auto ">
                <div className="navbar-start">
                    <Link href="/" className="btn btn-ghost">
                        <h1 className='text-2xl font-bold'><span className='text-[#1F2937]'>Keen</span><span className='text-[#244D3F]'>Keeper</span></h1>
                    </Link>
                </div>

                <div className="navbar-end">
                    {/* Mobile menu */}
                    <div className="dropdown dropdown-end md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow right-0 text-sm text-[#64748B] font-medium" >
                            {links}
                        </ul>
                    </div>

                    {/* Desktop menu */}
                    <ul className="menu menu-horizontal hidden md:flex px-1 items-center gap-1 text-base text-[#64748B] font-medium">
                        {links}
                    </ul>
                </div>
            </div>
            {/* <hr className='text-[#E9E9E9]' /> */}
        </div>
    );
};

export default Navbar;