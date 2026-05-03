import { ILoginProps, IRegisterProps, IUserSession } from "@/interfaces"
import { toast } from 'react-toastify'

const API_URL = process.env.NEXT_PUBLIC_API_URL


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

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const parsedResponse = await response.json();
        
        if (!response.ok || parsedResponse.message) {
            const errorMsg = parsedResponse.message || "REGISTRATION FAILED";
            toast.error(`SYSTEM ERROR: ${errorMsg}`, { ...retroToastStyle, icon: "⚠️" });
            throw new Error(errorMsg)
        }

        
        toast.success("SUCESS: USER REGISTERED SUCCESSFULLY.", {
            ...retroToastStyle,
            icon: "✅"
        });
        
        return parsedResponse;
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function login(userData: ILoginProps): Promise<IUserSession> {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const parsedResponse = await response.json();

        if (!response.ok || parsedResponse.message) {
            const errorMsg = parsedResponse.message || "LOGIN FAILED";
            toast.error(`SYSTEM ERROR: ${errorMsg}`, { ...retroToastStyle, icon: "❌" });
            throw new Error(errorMsg)
        }

        
        toast.success("SUCESS: SESSION STARTED. ACCESS GRANTED.", {
            ...retroToastStyle,
            icon: "🔑"
        });

        return parsedResponse;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const logoutUser = () => {
    localStorage.removeItem('userSession')
    localStorage.removeItem('cart')
    window.dispatchEvent(new Event('storage'))
    
    toast.info("SYSTEM: SESSION CLOSED.", {
        ...retroToastStyle,
        icon: "🔌"
    });
}

export const getCurrentUser = () => {
    const session = localStorage.getItem('userSession')
    if (session) {
        const parsedSession = JSON.parse(session)
        return parsedSession.user || null
    }
    return null
}