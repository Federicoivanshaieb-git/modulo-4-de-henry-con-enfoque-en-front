'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Searchbar from '@/components/searchbar'




const handleLogout = () => {
        localStorage.removeItem("userSession")

        };
const Navbar = () => {
    const { userData, handleLogout } = useAuth(); 
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    useEffect(() => {
        setIsMounted(true);
    }, []);

    
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    if (!isMounted) return <nav className="w-full bg-[#C0C0C0] h-18 border-b-4 border-black"></nav>;

    return (
        <nav className="w-full bg-[#C0C0C0] text-black sticky top-0 z-50 shadow-[0_4px_0_0_#000] border-b-4 border-black font-(family-name:--font-vt323)]">
            <div className="py-3 px-6 md:px-10 flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-8">
                    
                    <Link href="/" className="bg-black p-1 border-2 border-gray-400 shrink-0">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMfcw0llY1jfkP7S-S2gF4ZMBdaIDOzbV9Q&s" 
                            alt="Logo" 
                            className="h-7 invert brightness-200" 
                        />
                    </Link>

                    
                    <div className="hidden lg:flex items-center space-x-6 text-2xl uppercase font-bold">
                        <Link 
                            href="/" 
                            className={pathname === '/' ? 'underline decoration-4 underline-offset-8' : 'hover:underline'}
                        >
                            Home
                        </Link>
                        <Searchbar/>
                    </div>
                </div>

                
                <div className="hidden lg:flex items-center gap-4">
                    {userData ? (
                        <>
                            <Link href="/cart" className="p-1 hover:bg-gray-300 border-2 border-transparent hover:border-black transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </Link>
                            <Link 
                                href="/dashboard" 
                                className="bg-[#0000FF] text-white py-1.5 px-6 border-4 border-black shadow-[3px_3px_0_0_#000] text-xl font-bold uppercase hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_0_#000] transition-all"
                            >
                                {userData.user?.name || "PROFILE"}
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="bg-[#FF0000] text-white py-1.5 px-4 border-4 border-black shadow-[3px_3px_0_0_#000] text-xl font-bold uppercase hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_0_#000] transition-all"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link 
                            href="/login" 
                            className="bg-[#008000] text-white py-1.5 px-8 border-4 border-black shadow-[3px_3px_0_0_#000] text-xl font-bold uppercase hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_0_#000] transition-all"
                        >
                            Login
                        </Link>
                    )}
                </div>

                
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-1 border-4 border-black bg-white shadow-[3px_3px_0_0_#000] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            
            {isMenuOpen && (
                <div className="lg:hidden w-full bg-[#C0C0C0] border-t-4 border-black p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                    <div className="w-full">
                        <Searchbar />
                    </div>
                    
                    <Link href="/" className="text-3xl font-bold uppercase border-b-2 border-black pb-2">
                        Home
                    </Link>

                    {userData ? (
                        <div className="flex flex-col gap-4">
                            <Link href="/cart" className="flex items-center gap-3 text-3xl font-bold uppercase">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Cart
                            </Link>
                            <Link 
                                href="/dashboard" 
                                className="bg-[#0000FF] text-white py-3 px-6 border-4 border-black shadow-[4px_4px_0_0_#000] text-2xl font-bold uppercase text-center"
                            >
                                {userData.user?.name || "PROFILE"}
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="bg-[#FF0000] text-white py-3 px-6 border-4 border-black shadow-[4px_4px_0_0_#000] text-2xl font-bold uppercase text-center"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link 
                            href="/login" 
                            className="bg-[#008000] text-white py-3 px-6 border-4 border-black shadow-[4px_4px_0_0_#000] text-2xl font-bold uppercase text-center"
                        >
                            Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;