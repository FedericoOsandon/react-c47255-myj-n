import { useCartContext } from "../../contexts/CartContext"


export const CartContainer = () => {

  const { cartList, vaciarCarrito } = useCartContext()
  // console.log(cartList)
  return (
    <div className="w-100">
        { cartList.map(product => <div>
                                    <img className="w-25" src={product.imageUrl} alt="image" />
                                    Producto: {product.name} - Price: {product.price} - Cantidad: {product.cant}
                                    <button className="btn btn-danger"> X </button>

                                    <hr/>
                                  </div>) 
        }
        Precio Total: 
        <br />

        <button 
          className="btn btn-outline-danger" 
          onClick={vaciarCarrito}
        >
          Vaciar carrito
        </button>
        <br />
        <button>Terminar compra</button>
    </div>
  )
}
