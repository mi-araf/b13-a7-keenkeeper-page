import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=" text-white bg-[#244D3F]">
            <footer className=" w-11/12 mx-auto" >
                <div className="mx-auto flex max-w-7xl flex-col justify-between px-6 pb-10 pt-17 md:px-12">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-4xl font-extrabold md:text-6xl">
                            KeenKeeper
                        </h1>

                        <p className="mt-4 max-w-3xl text-sm text-white/80 md:text-base">
                            Your personal shelf of meaningful connections. Browse, tend, and
                            nurture the relationships that matter most.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold">Social Links</h3>
                        <div className="mt-4 flex items-center gap-4">
                            <a href="https://www.instagram.com/tde_araf" target="_blank" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#244D3F] transition hover:scale-105">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/mushfiq.araf.2024" target="_blank" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#244D3F] transition hover:scale-105" >
                                <FaFacebookF />
                            </a>
                            <a href="https://web.programming-hero.com/" target="_blank" aria-label="X" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#244D3F] transition hover:scale-105" >
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[#FAFAFA]/50 md:text-base md:flex-row">
                        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

                        <div className="flex items-center gap-6">
                            <a href="#" className="transition hover:text-white/70">
                                Privacy Policy
                            </a>
                            <a href="#" className="transition hover:text-white/70">
                                Terms of Service
                            </a>
                            <a href="#" className="transition hover:text-white/70">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;