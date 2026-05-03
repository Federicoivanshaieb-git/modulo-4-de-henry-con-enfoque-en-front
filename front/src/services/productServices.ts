import { IProduct } from "@/interfaces"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getAllProducts(): Promise<IProduct[]> {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'GET',
            cache: 'no-store'
        })

        if (!response.ok) {
            console.error(`[SERVER] ERROR EN FETCH: ${response.status}`)
            return []
        }

        const products = await response.json()
        return products
    } catch (error: any) {
        console.error("[SERVER] DATABASE OFFLINE:", error.message)
        return []
    }
}

export async function getProductByID(id: string): Promise<IProduct | null> {
    try {
        const products = await getAllProducts()
        
        console.log(`[DEBUG] BUSCANDO ID: "${id}" (Tipo: ${typeof id})`)
        
        if (!products || products.length === 0) {
            console.warn("[DEBUG] NO SE RECIBIERON PRODUCTOS DEL BACKEND")
            return null
        }

        const productFiltered = products.find((product) => {
            const match = String(product.id) === String(id)
            if (match) console.log(`[DEBUG] PRODUCTO ENCONTRADO: ${product.name}`)
            return match
        })
        
        if (!productFiltered) {
            console.warn(`[DEBUG] EL ID "${id}" NO COINCIDE CON NINGUNO EN LA DB`)
            console.log("[DEBUG] IDS DISPONIBLES EN DB:", products.map(p => p.id))
        }

        return productFiltered || null
    } catch (error: any) {
        console.error("[DEBUG] ERROR EN getProductByID:", error.message)
        return null
    }
}


export async function getProductByName(name: string) {
    try {
    const response = await getAllProducts()
    const productsFiltered=response.filter((product)=>product.name.toLowerCase().includes(name.toLowerCase()))
    return productsFiltered
    } catch (error: any) {
    throw new Error(error);
    }
}