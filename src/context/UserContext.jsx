import { createContext, useState, useEffect } from "react";

const UserContext = createContext(); //Creamos el contexto

export const UserProvider = ({ children }) => { //Creamos el proveedor del contexto

    const [userLogged, setUserLogged] = useState(false); //Estado para el login del usuario
    
    // Al montar, comprobamos si hay usuario logueado en el localStorage
    useEffect(() => {
        const stored = localStorage.getItem("userLogged")
        if (stored === "true"){
            setUserLogged(true)
        }
    }, [])

    //Función simulada para loguear al usuario
    const login = () => {
        setUserLogged(true);
        localStorage.setItem("userLogged", "true");
    }

    //Función para hacer el logout
    const logout = () => {
        setUserLogged(false);
        localStorage.setItem("userLogged", "false");
    }

    return (
        <UserContext.Provider value={{ userLogged, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext}