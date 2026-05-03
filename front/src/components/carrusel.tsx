'use client'
import React, { useState, useEffect } from 'react'
import { IProduct } from '@/interfaces'

const Carousel = ({ products }: { products: IProduct[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    
    useEffect(() => {
        if (products.length === 0) return
        const interval = setInterval(() => {
            handleNext()
        }, 5000)
        return () => clearInterval(interval)
    }, [currentIndex, products.length])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    }

    if (!products || products.length === 0) return null

    const currentProduct = products[currentIndex]

    return (
        <div className="relative w-full h-112.5 bg-black overflow-hidden border-b-4 border-black flex items-center justify-center group">
            
            <div 
                className="absolute inset-0 bg-center bg-cover opacity-30 blur-xl transition-all duration-700"
                style={{ backgroundImage: `url(${currentProduct.image})` }}
            />

            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-around w-full max-w-6xl px-12 gap-8">
                <div className="w-64 h-64 flex items-center justify-center bg-white p-4 border-4 border-white shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]">
                    <img 
                        src={currentProduct.image} 
                        alt={currentProduct.name} 
                        className="max-h-full object-contain animate-in fade-in zoom-in duration-500"
                    />
                </div>

                <div className="text-white text-center md:text-left font-(family-name:--font-vt323]">
                    <h2 className="text-5xl font-black uppercase mb-4 tracking-tighter italic">
                        {currentProduct.name}
                    </h2>
                    <p className="text-xl text-gray-400 mb-6 max-w-md uppercase leading-none">
                        {currentProduct.description.substring(0, 100)}...
                    </p>
                    <span className="text-4xl font-bold bg-white text-black px-4 py-1">
                        ${currentProduct.price}
                    </span>
                </div>
            </div>

            
            <button 
                onClick={handlePrev}
                className="absolute left-4 bg-white text-black border-2 border-black px-4 py-2 font-bold hover:bg-gray-300 shadow-[4px_4px_0_0_#FFF] active:translate-y-1 active:shadow-none transition-all z-20"
            >
                PREV
            </button>
            <button 
                onClick={handleNext}
                className="absolute right-4 bg-white text-black border-2 border-black px-4 py-2 font-bold hover:bg-gray-300 shadow-[4px_4px_0_0_#FFF] active:translate-y-1 active:shadow-none transition-all z-20"
            >
                NEXT
            </button>

            
            <div className="absolute bottom-4 flex gap-2 z-20">
                {products.map((_, index) => (
                    <div 
                        key={index}
                        className={`w-3 h-3 border border-white ${index === currentIndex ? 'bg-white' : 'bg-transparent'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel