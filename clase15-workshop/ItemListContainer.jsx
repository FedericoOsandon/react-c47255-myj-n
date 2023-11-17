import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"

import { ItemList } from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"


function ItemListContainer({ greeting = 'saludando por defecto' }) {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ]   = useState(true)

    const { cid } = useParams()
    
    /* The `useEffect` hook is used to perform side effects in a functional component. In this case,
    the `useEffect` hook is being used to fetch data from a Firestore database. */
    useEffect(()=>{
        const dbFirestore     = getFirestore()
        const queryCollection = collection(dbFirestore, 'products')       
      
        const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection                
        
        getDocs(queryFilter)
        .then(res =>{ setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) )})
        .catch(err => console.log(err)) 
        .finally(() => setLoading(false))
        
    }, [cid])

    return (
        <>
            
            {   loading ? 
                    <Loading />
                :                   
                    <ItemList products={products } />
            }
           
        </>
    )
}

export default ItemListContainer