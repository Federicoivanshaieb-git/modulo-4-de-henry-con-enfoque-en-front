'use client'
import { useAuth } from "@/context/AuthContext"
import { IProduct } from "@/interfaces"
import { toast } from "react-toastify" 

const ProductDetailView = (product: IProduct) => {
    const { userData } = useAuth()

    
    const retroToastStyle: any = {
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

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]")
        const isProductInCart = cart.some((item: any) => item.id === product.id)

        if (isProductInCart) {
            
            toast.error(`SYSTEM ERROR: ${product.name} ALREADY EXISTS.`, {
                ...retroToastStyle,
                icon: "✖️"
            });
            return
        }

        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
        
        
        window.dispatchEvent(new Event('storage'))

        
        toast.success(`SUCESS: ${product.name} ADDED TO CART.`, {
            ...retroToastStyle,
            icon: "💾"
        });
    }

    return (
        <div className="min-h-screen bg-[#808080] py-20 px-4 font-(family-name:--font-vt323)]">
            <div className="max-w-4xl mx-auto bg-[#C0C0C0] border-4 border-black shadow-[10px_10px_0_0_#000] p-8 md:p-12">
                
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2 bg-white border-4 border-black shadow-[6px_6px_0_0_#444] p-6 flex items-center justify-center">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="max-h-80 object-contain p-2 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-between text-black">
                        <div>
                            <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4 border-b-4 border-black pb-2">
                                {product.name}
                            </h1>
                            <p className="text-2xl leading-tight uppercase font-bold text-gray-800 mb-6 italic">
                                {product.description}
                            </p>
                            
                            <div className="bg-white border-2 border-black p-4 mb-6 shadow-[4px_4px_0_0_#000]">
                                <p className="text-xl font-bold uppercase text-gray-500 tracking-widest mb-1">Stock Availability</p>
                                <p className="text-3xl font-black uppercase italic">{product.stock} Units In Storage</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-5xl font-black mb-6 bg-black text-white inline-block px-4 py-2 border-2 border-gray-400">
                                ${product.price}
                            </p>
                            
                            <button 
                                onClick={handleAddToCart}
                                disabled={!userData?.token}
                                className={`w-full py-4 border-4 border-black text-3xl font-black uppercase transition-all shadow-[6px_6px_0_0_#000] active:translate-y-1 active:shadow-none ${
                                    userData?.token 
                                    ? "bg-[#0000FF] text-white hover:bg-[#0000AA]" 
                                    : "bg-gray-500 text-gray-300 cursor-not-allowed"
                                }`}
                            >
                                {userData?.token ? "Add To Cart" : "Login Required"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t-4 border-black flex justify-between items-center text-xl font-bold uppercase italic text-gray-700">
                    <p>Product ID: {product.id}</p>
                    <p>Status: Online</p>
                    <p>Ver: 7.5.1</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailView