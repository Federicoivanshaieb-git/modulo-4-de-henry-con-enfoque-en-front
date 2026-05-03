'use client'
import React from 'react'
import { IProduct } from '@/interfaces'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useAuth } from '@/context/AuthContext' 

const Card = ({ id, name, price, description, image, categoryId, stock }: IProduct) => {
    const { userData } = useAuth(); 
    const retroFont = { fontFamily: '"VT323", monospace' }

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        
        if (!userData?.token) {
            toast.error("ERROR: AUTH REQUIRED. PLEASE LOG IN TO ADD ITEMS.", {
                style: { 
                    borderRadius: '0', 
                    border: '3px solid black', 
                    backgroundColor: '#FF0000',
                    color: 'white',
                    boxShadow: '4px 4px 0px 0px #000',
                    fontFamily: '"VT323", monospace',
                    fontSize: '1.2rem'
                },
                icon: "🚫"
            });
            return; 
        }

        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
        const isProductInCart = storedCart.some((item: IProduct) => item.id === id)
        
        const toastConfig: any = {
            style: { 
                borderRadius: '0', 
                border: '3px solid black', 
                backgroundColor: '#C0C0C0', 
                color: 'black',
                boxShadow: '4px 4px 0px 0px #000',
                fontFamily: '"VT323", monospace',
                fontSize: '1.2rem'
            },
            progressStyle: { background: 'black' }
        }

        if (!isProductInCart) {
            const updatedCart = [...storedCart, { id, name, price, description, image, categoryId, stock }]
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            window.dispatchEvent(new Event('storage'))
            
            toast.success(`SUCCESS: ${name} ADDED TO CART.`, {
                ...toastConfig,
                icon: "💾"
            })
        } else {
            toast.error(`ERROR: ${name} ALREADY EXISTS.`, {
                ...toastConfig,
                icon: "✖️"
            })
        }
    }

    return (
        <div 
            className="bg-white border-2 border-black p-4 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] shadow-[4px_4px_0_0_#000] w-full" 
            style={retroFont}
        >
            <Link href={`/product/${id}`} className="group grow">
                <div className="w-full aspect-square mb-4 p-2 border border-gray-200 flex items-center justify-center overflow-hidden bg-white">
                    <img 
                        src={image} 
                        alt={name} 
                        className="max-h-full object-contain transition-all duration-300 group-hover:scale-110" 
                    />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold uppercase leading-none mb-2 border-b-2 border-black pb-1 group-hover:text-blue-700 transition-colors">
                        {name}
                    </h2>
                    <p className="text-gray-600 text-lg leading-tight mb-4 uppercase">
                        {description.substring(0, 60)}...
                    </p>
                </div>
            </Link>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-3xl font-black tracking-tighter">
                    ${price}
                </span>
                <button 
                    onClick={handleAddToCart}
                    className="bg-black text-white px-4 py-2 text-lg font-bold hover:bg-blue-700 active:bg-blue-900 transition-colors border-2 border-black active:shadow-none shadow-[2px_2px_0_0_#000] z-10 uppercase"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card