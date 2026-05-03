'use client'

import { useAuth } from "@/context/AuthContext"
import { IOrder } from "@/interfaces";
import { GetOrders } from "@/services/orderService";
import { useEffect, useState } from "react"

const OrdersView = () => {
    const {userData}=useAuth();
    const [orders,setOrders]=useState<IOrder[]>([]);

    

    const handleGetOrders=async()=>{
        if(userData?.token){
            const orders=await GetOrders(userData.token)
            setOrders(orders)
        }
    }
    useEffect(()=>{
            handleGetOrders()
        },[])
    return (
        <div>
            <h1>Tus compras</h1>
            {
                orders.length?
                    orders.map((order:IOrder)=>{
                        return (
                            <div key={order.id}>
                                <p>orden n°{order.id}</p>
                                <p>estado: {order.status==="approved" ? "Aprobado":"cancelado"}</p>
                                <p>Fecha de la Compra:{new Date(order.date).toLocaleDateString()}</p>
                                <p>productos:</p>
                                {
                                    order.products.map((product)=>{
                                        return(
                                            <div key={product.id}>
                                                <p>{product.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }):(
                        <div>No tienes Ordenes creadas aun.</div>
                    )
            }
        </div>
    )
}

export default OrdersView
