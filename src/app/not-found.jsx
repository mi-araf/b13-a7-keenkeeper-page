import Link from "next/link";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";

export default function NotFound() {
    return (
        <section className="flex my- tems-center justify-center bg-[#F1F5F9] px-4 py-16">
            <div className="card w-full max-w-xl border border-[#244D3F]/10 bg-white shadow-xl">
                <div className="card-body items-center px-6 py-8 text-center md:px-10 md:py-10">
                    <div className="mb-3 rounded-full border border-[#244D3F]/10 bg-[#244D3F]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#244D3F]">
                        Page Missing
                    </div>

                    <h1 className="text-5xl font-black leading-none text-[#244D3F] md:text-7xl">
                        404
                    </h1>

                    <h2 className="mt-3 text-2xl font-bold text-[#1F2937] md:text-3xl">
                        Lost in the KeenKeeper
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-500 md:text-base">
                        The page you’re looking for doesn’t exist, moved away, or never
                        bloomed in the first place.
                    </p>

                    <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                        <Link href="/" className="btn btn-sm border-none bg-[#244D3F] text-white hover:bg-[#1d4034]" >
                            <FaHouse />Return Home
                        </Link>

                        <Link href="/" className="btn btn-sm btn-outline border-[#244D3F] text-[#244D3F] hover:bg-[#244D3F] hover:text-white">
                            <FaArrowLeft />Go Back Safe
                        </Link>
                    </div>

                    <div className="mt-2 text-xs text-slate-400">
                        Error code:{" "} <span className="font-semibold text-slate-500">404 NOT FOUND</span>
                    </div>
                </div>
            </div>
        </section>
    );
}