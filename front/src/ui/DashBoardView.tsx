'use client'
import { useAuth } from "@/context/AuthContext"
import { GetOrders } from "@/services/orderService"
import { useEffect, useState } from "react"

const DashBoardView = () => {
    const { userData } = useAuth();
    const [orders, setOrders] = useState<any[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            if (userData?.token) {
                try {
                    const response = await GetOrders(userData.token);
                    setOrders(response);
                } catch (error) {
                    console.error("Error al cargar órdenes:", error);
                }
            }
        };
        fetchOrders();
    }, [userData]);

    return (
        <div className="max-w-5xl mx-auto p-8 my-12 bg-[#C0C0C0] border-4 border-black shadow-[8px_8px_0_0_#000] font-(family-name:--font-vt323)]">
            
            <div className="flex items-center space-x-6 mb-10 border-b-4 border-black pb-8">
                <div className="bg-black text-white w-20 h-20 border-4 border-gray-400 flex items-center justify-center text-4xl font-bold uppercase shadow-[4px_4px_0_0_#000]">
                    {userData?.user.name.charAt(0)}
                </div>
                <div>
                    <h1 className="text-5xl font-black text-black uppercase tracking-tighter italic">
                        User Profile: {userData?.user.name}
                    </h1>
                    <p className="text-2xl text-gray-700 uppercase"></p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-4 bg-white border-4 border-black shadow-[4px_4px_0_0_#000]">
                    <p className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-1">Email Address</p>
                    <p className="text-2xl text-black font-bold uppercase">{userData?.user.email}</p>
                </div>
                <div className="p-4 bg-white border-4 border-black shadow-[4px_4px_0_0_#000]">
                    <p className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-1">Phone Line</p>
                    <p className="text-2xl text-black font-bold uppercase">{userData?.user.phone}</p>
                </div>
                <div className="p-4 bg-white border-4 border-black shadow-[4px_4px_0_0_#000] md:col-span-2">
                    <p className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-1">Shipping Destination</p>
                    <p className="text-2xl text-black font-bold uppercase">{userData?.user.address}</p>
                </div>
            </div>

            <h2 className="text-4xl font-black text-black mb-8 uppercase italic border-b-4 border-black inline-block">
                Order History
            </h2>
            
            <div className="space-y-6">
                {orders.length > 0 ? (
                    orders.map((order: any) => (
                        <div key={order.id} className="p-6 border-4 border-black bg-[#D3D3D3] flex flex-col md:flex-row justify-between items-center hover:bg-white transition-all shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]">
                            <div className="flex flex-col mb-4 md:mb-0">
                                <span className="text-xl font-bold text-white bg-[#0000FF] px-4 py-1 border-2 border-black self-start mb-2 uppercase italic">
                                    ID: {order.id}
                                </span>
                                <p className="text-2xl text-black font-bold uppercase">
                                    Date: {new Date(order.date).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="flex items-center space-x-8">
                                <div className="text-right">
                                    <p className="text-2xl font-black text-black uppercase">{order.products.length} Items</p>
                                    <p className="text-xl font-bold text-[#008000] uppercase italic">Status: {order.status}</p>
                                </div>
                                
                                <button 
                                    onClick={() => setSelectedOrder(order)}
                                    className="bg-black text-white px-6 py-2 border-2 border-gray-400 text-xl font-bold uppercase hover:bg-gray-800 active:translate-y-1 shadow-[4px_4px_0_0_#444] transition-all"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white border-4 border-dashed border-black">
                        <p className="text-3xl text-gray-400 font-bold uppercase">[ NO_RECORDS_FOUND ]</p>
                    </div>
                )}
            </div>

            {selectedOrder && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-[#C0C0C0] border-4 border-black max-w-2xl w-full max-h-[85vh] overflow-y-auto p-10 shadow-[10px_10px_0_0_#000] relative animate-in zoom-in-95 duration-200">
                        <button 
                            onClick={() => setSelectedOrder(null)}
                            className="absolute top-4 right-6 text-black hover:text-red-600 text-4xl font-black"
                        >
                            [X]
                        </button>
                        
                        <h3 className="text-4xl font-black mb-8 border-b-4 border-black pb-4 uppercase italic">
                            Order: #{selectedOrder.id}
                        </h3>
                        
                        <div className="space-y-4 mb-10">
                            {selectedOrder.products.map((product: any, index: number) => (
                                <div key={index} className="flex items-center space-x-6 p-4 border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                                    <img src={product.image} alt={product.name} className="w-20 h-20 object-contain border-2 border-gray-200 p-1" />
                                    <div className="flex-1">
                                        <p className="text-2xl font-black text-black uppercase">{product.name}</p>
                                        <p className="text-xl text-gray-600 font-bold uppercase">Price: ${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            onClick={() => setSelectedOrder(null)}
                            className="w-full bg-[#800000] text-white py-4 border-4 border-black text-2xl font-black uppercase hover:bg-red-900 shadow-[4px_4px_0_0_#000] active:translate-y-1 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DashBoardView