
export const ItemDetail = ({product}) => {

    // useNombre= ()=>{} // custom hook
    const onAdd = cant => {
        console.log('cantidad seleccionada: ', cant)
        agregarAlCarrito( { ...product, cant } )
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
                    <ItemCounter initial={1} stock={5} onAdd={onAdd}/> 
                </div>            
                
                    
            </div>
    )
}
