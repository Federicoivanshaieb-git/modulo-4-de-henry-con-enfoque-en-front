'use client'
import { IUserSession } from "@/interfaces";
import { createContext, useContext, useState, useEffect } from "react"
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify'; 

export interface IAuthContextProps {
    userData: IUserSession | null;
    setUserData: (values: IUserSession | null) => void
    handleLogout: () => void
}

export const AuthContext = createContext<IAuthContextProps>({
    userData: null,
    setUserData: () => { },
    handleLogout: () => { }
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const [userData, setUserData] = useState<IUserSession | null>(null)

    useEffect(() => {
        const storedData = localStorage.getItem("userSession")
        if (storedData) {
            setUserData(JSON.parse(storedData))
        }
    }, [])

    useEffect(() => {
        if (userData) {
            const sessionString = JSON.stringify({ token: userData.token, user: userData.user });
            localStorage.setItem("userSession", sessionString);
            Cookies.set("userSession", sessionString, { expires: 1 }); 
        } else {
            localStorage.removeItem("userSession");
            Cookies.remove("userSession");
        }
    }, [userData])

    
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

    const handleLogout = () => {
        setUserData(null)
        localStorage.removeItem("userSession")
        Cookies.remove("userSession")
        
        
        toast.info("SYSTEM: USER LOGGED OUT. SESSION TERMINATED.", {
            ...retroToastStyle,
            icon: "🔌"
        });

        router.push("/")
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)