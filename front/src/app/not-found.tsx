'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {
    const [seconds, setSeconds] = useState(5)
    const router = useRouter()

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1)
        }, 1000)

        if (seconds === 0) {
            router.push('/')
        }

        return () => clearInterval(timer)
    }, [seconds, router])

    return (
        <div className="min-h-screen bg-[#D3D3D3] flex items-center justify-center font-(family-name:--font-vt323)] p-6">
            <div className="max-w-2xl w-full bg-white border-4 border-black shadow-[12px_12px_0_0_#000] p-10 text-center relative">
                <div className="mb-6 text-8xl animate-bounce"></div>
                
                <h1 className="text-7xl font-black uppercase tracking-tighter mb-4 italic">
                    SYSTEM ERROR 404 
                </h1>
                
                <div className="bg-black text-white p-6 mb-8 border-2 border-gray-400">
                    <p className="text-3xl uppercase tracking-widest leading-none">
                        REDIRECTING TO HOME IN: 
                        <span className="text-yellow-400 ml-4">{seconds}s</span>
                    </p>
                </div>

                <p className="text-2xl mb-10 uppercase font-bold text-gray-600">
                    COULD NOT FIND REQUESTED RESOURCE
                </p>

                <Link 
                    href="/" 
                    className="inline-block bg-black text-white px-10 py-4 text-3xl font-black uppercase hover:bg-gray-800 transition-all shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] active:translate-y-1 active:shadow-none"
                >
                    RETURN NOW
                </Link>

                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-black"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-black"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-black"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-black"></div>
            </div>
        </div>
    )
}