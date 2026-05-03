import React from 'react'
import CardList from '@/components/CardList'
import Carousel from '@/components/carrusel' 
import { getAllProducts } from '@/services/productServices' 

const HomePage = async () => {
    
    const products = await getAllProducts();

    
    const expensiveProducts = [...products]
        .sort((a, b) => b.price - a.price)
        .slice(0, 5);

    return (
        <main className="min-h-screen bg-[#D3D3D3] w-full font-(family-name:--font-vt323)]">
            
            <div className="w-full bg-white border-b-4 border-black py-12 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
                <div className="w-full px-6 md:px-10">
                    <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-black leading-none italic">
                        RETRO APPLE STORE
                    </h1>
                    <div className="flex items-center gap-4 mt-4">
                        <span className="bg-blue-700 text-white px-4 py-1 text-2xl font-bold uppercase">
                            System 7.5 Edition
                        </span>
                        <span className="text-2xl text-black font-bold uppercase tracking-widest">
                            / Established 1984
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 md:px-10 py-12 space-y-16">
                
                <section className="w-full bg-black border-4 border-black shadow-[12px_12px_0_0_#000] relative overflow-hidden">
                    <Carousel products={expensiveProducts} />
                </section>

                
                <section className="w-full">
                    <div className="flex justify-between items-end mb-10 border-b-8 border-black pb-4">
                        <h2 className="text-5xl font-black uppercase italic tracking-tighter">Hardware Inventory</h2>
                        <div className="flex items-center gap-4">
                            <span className="text-xl font-bold uppercase hidden md:block">Status: </span>
                            <p className="text-2xl font-bold bg-green-800 text-white px-6 py-1 shadow-[4px_4px_0_0_#3b82f6]">
                                Online
                            </p>
                        </div>
                    </div>

                    <CardList />
                </section>
            </div>
        </main>
    )
}

export default HomePage