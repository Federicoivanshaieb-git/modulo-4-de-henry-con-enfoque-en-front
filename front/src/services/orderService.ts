const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function CreateOrder(token: string, products: number[]) {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": token
            },
            body: JSON.stringify({
                products: products 
            })
        })

        const parsedResponse = await response.json();

        if (!response.ok) {

            throw new Error(parsedResponse.message || "Error al procesar la orden");
        }

        return parsedResponse;

    } catch (error: any) {

        throw new Error(error.message || error);
    }
}

export async function GetOrders(token: string) {
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", 
                "Authorization": token
            },
            })
        const parsedResponse = await response.json();
        if (!response.ok) {
            throw new Error(parsedResponse.message || "Error al procesar la orden");
        }
        return parsedResponse;
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

