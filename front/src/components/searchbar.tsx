'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        
        if (searchQuery.trim().length) {
            
            router.push(`/search/${searchQuery}`)
            
            
            setSearchQuery('') 
        } else {
            toast.warn("SYSTEM : PLEASE ENTER A SEARCH", {
                style: { 
                    borderRadius: '0', 
                    border: '3px solid black', 
                    backgroundColor: '#C0C0C0', 
                    color: 'black',
                    boxShadow: '4px 4px 0px 0px #000',
                    fontFamily: '"VT323", monospace'
                }
            });
        }
    }

    return (
        
        <div className="flex justify-center items-center flex-1 px-4">
            <form 
                onSubmit={handleSearch} 
                className="flex items-stretch font-[(--font-vt323)] shadow-[4px_4px_0_0_#000] w-full max-w-xs md:max-w-md"
            >
                <input 
                    placeholder="EXECUTE SEARCH..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-white border-2 border-black border-r-0 p-1 px-3 text-lg uppercase outline-none focus:bg-blue-50 transition-all placeholder:text-gray-400"
                />
                
                <button 
                    type="submit"
                    className="bg-black text-white border-2 border-black px-4 py-1 text-lg font-black uppercase hover:bg-gray-800 active:bg-[#0000FF] active:translate-y-px active:shadow-none transition-all"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Searchbar