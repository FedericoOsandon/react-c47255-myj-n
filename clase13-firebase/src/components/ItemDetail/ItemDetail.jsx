import { useState } from "react"
import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { Link } from "react-router-dom"

export const ItemDetail = ({product}) => {
    const [ isCount, setIsCount ] = useState(true)
    const { agregarAlCarrito } = useCartContext()
    // useNombre= ()=>{} // custom hook
    const onAdd = cant => {
        console.log('cantidad seleccionada: ', cant)
        agregarAlCarrito( { ...product, cant } )
        setIsCount(false)
    }
    
    return (
        <div className="row">
                <div className="col-6 mt-5">
                    <img src={product.imageUrl} alt="" className="img-fluid"/>
                </div>
                <div className="col-6 text-center mt-5">

                    <p>Nombre: {product.name}</p>
                    <p>Category: {product.category}</p>
                    <p>Precio: {product.price}</p>
                    {
                        isCount ? 
                            <ItemCounter initial={1} stock={5} onAdd={onAdd}/> 
                        : 
                            <>
                                <Link className="btn btn-outline-dark " to='/cart'>Ir al cart</Link>
                                <Link className="btn btn-outline-dark " to='/'>Ir al Home</Link>
                            </>
                    }
                </div>            
                
                    
            </div>
    )
}
