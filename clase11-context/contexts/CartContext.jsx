import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)

// crear un componente para vincularo con contexto

export const CartContextProvider = ({children}) => {
    // estados funciones globales 
    const [cartList, setCartList] = useState([])


    const agregarAlCarrito = (proudct) => {

        setCartList([
            ...cartList,
            proudct
        ])
        // si ya esta el product cambiar la cantidad
        // si no esta agregarlo
    }

    // crear una función para cant total de prod
    // crear una función para precio total de prod
    // eliminar por producto

    const vaciarCarrito = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}