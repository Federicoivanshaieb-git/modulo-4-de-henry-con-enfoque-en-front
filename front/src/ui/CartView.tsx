'use client'
import { useAuth } from "@/context/AuthContext"
import { IProduct } from "@/interfaces"
import { CreateOrder } from "@/services/orderService"
import { useEffect, useState } from "react"
import Link from "next/link"
import { toast } from "react-toastify" 

const CartView = () => {
    const { userData } = useAuth()
    const [cart, setCart] = useState<IProduct[]>([])
    const [totalCart, setTotalCart] = useState<number>(0)

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

    useEffect(() => {
        const storedCart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
        if (storedCart.length > 0) {
            setCart(storedCart)
            calculateTotal(storedCart)
        }
    }, [])

    const calculateTotal = (items: IProduct[]) => {
        let totalPrice = items.reduce((acc, product) => acc + product.price, 0)
        if ( totalPrice>1500){
            let newPrice=totalPrice *.85 
            totalPrice=newPrice 
        }
        setTotalCart(totalPrice)
    }

    const removeFromCart = (productId: number) => {
        const productToRemove = cart.find(p => p.id === productId);
        const updatedCart = cart.filter((product) => product.id !== productId)
        setCart(updatedCart)
        calculateTotal(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        
        toast.info(`SYSTEM: ${productToRemove?.name} REMOVED.`, {
            ...retroToastStyle,
            icon: "🗑️"
        });
        window.dispatchEvent(new Event('storage'))
    }

    const handleCheckOut = async () => {
        if (userData?.token) {
            const idProducts = cart.map((product) => product.id)
            try {
                await CreateOrder(userData.token, idProducts)
                toast.success("SUCESS: PURCHASE COMPLETED SUCCESSFULLY.", {
                    ...retroToastStyle,
                    icon: "📦"
                });
                localStorage.setItem("cart", "[]")
                setCart([])
                setTotalCart(0)
                window.dispatchEvent(new Event('storage'))
            } catch (error: any) {
                toast.error(`SYSTEM: ${error.message || "CHECKOUT FAILED"}`, {
                    ...retroToastStyle,
                    icon: "❌"
                });
            }
        } else {
            toast.warning("SYSTEM: AUTH REQUIRED FOR CHECKOUT.", {
                ...retroToastStyle,
                icon: "👤"
            });
        }
    }

    return (
        
        <div className="bg-[#D3D3D3] min-h-screen w-full py-12 px-6 md:px-10 font-(family-name:--font-vt323)]">
            
            
            <div className="w-full bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-12">
                
                <h1 className="text-6xl md:text-8xl font-black mb-10 border-b-8 border-black pb-4 uppercase tracking-tighter italic leading-none">
                    [ CART ]
                </h1>
                
                <div className="mb-12">
                    {cart.length > 0 ? (
                        
                        <div className="space-y-4">
                            {cart.map((product) => (
                                <div key={product.id} className="flex flex-col md:flex-row justify-between items-center border-4 border-black p-6 bg-gray-50 hover:bg-gray-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                                        <div className="w-32 h-32 shrink-0 bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="text-center md:text-left grow">
                                            <p className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2">{product.name}</p>
                                            <p className="text-xl text-gray-600 font-bold">UNIT_PRICE: ${product.price}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto mt-6 md:mt-0 gap-6">
                                        <p className="font-black text-4xl md:text-5xl italic">${product.price}</p>
                                        <button 
                                            onClick={() => removeFromCart(product.id)}
                                            className="bg-red-600 text-white px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 font-black text-xl uppercase hover:bg-red-700 transition-all"
                                        >
                                            DELETE
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 border-4 border-dashed border-black bg-gray-100">
                            <p className="text-gray-500 text-4xl mb-8 font-black uppercase tracking-widest italic">Your Cart is empty</p>
                            <Link href="/" className="inline-block bg-black text-white px-12 py-4 text-2xl font-black hover:bg-gray-800 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-0.5">
                                RETURN TO STORE
                            </Link>
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t-8 border-black pt-10 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="text-center md:text-left border-4 border-black p-6 bg-black text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                            <p className="text-xl font-bold uppercase tracking-[0.2em] mb-1">TOTAL INVENTORYVALUE</p>
                            <p className="text-6xl md:text-7xl font-black italic tracking-tighter">${totalCart}</p>
                        </div>
                        
                        <button 
                            onClick={handleCheckOut}
                            className="w-full md:w-auto bg-green-600 text-white px-20 py-8 text-4xl md:text-5xl font-black uppercase tracking-widest border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-green-700 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                        >
                            EXECUTE PURCHASE
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartView