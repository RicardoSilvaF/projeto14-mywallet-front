import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext()

export default function UserProvider({ children }) {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/home")
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}