import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"


// console.log(task)

function ItemListContainer({ greeting = 'saludando por defecto' }) {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ]   = useState(true)

    useEffect(()=>{
        mFetch() //llamada a las apis -> 
        .then(resultado => setProducts(resultado))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    // console.log(products)
    return (
        <>
            <center>
                {greeting}
            </center>
            {/* [<li>1</li>, <li>2</li>, <li>3</li>,.....] */}
            {/* { [1,2,3,4,5].map((numero, index) => <li key={index} >{numero}</li>) } */}
            {   loading ? <h2>Cargando...</h2> 
                :
                products.map(product =>    <div className="card w-25">
                                                <img src={product.imageUrl} className="card-img-top"/>
                                                <div className="card-body">
                                                    <p>Nombre: {product.name}</p>
                                                    <p>Category: {product.category}</p>
                                                    <p>Precio: {product.price}</p>

                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-outline-dark w-100">detalle</button>
                                                </div>
                                            </div>
            )}
        </>
    )
}

export default ItemListContainer