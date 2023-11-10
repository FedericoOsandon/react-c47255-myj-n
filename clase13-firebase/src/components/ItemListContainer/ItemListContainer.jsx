import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "../ItemList/ItemList"

import { useParams } from "react-router-dom"


const Loading = () => {
    // useEffect(()=>{
    //     return () => {
    //         console.log('desmontaje de loading')
    //     }
    // })
    return <h2>Cargando...</h2>
}



function ItemListContainer({ greeting = 'saludando por defecto' }) {
    const [ products, setProducts ] = useState([])
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ]   = useState(true)
    const [ like, setLike ]   = useState(false)

    const { cid } = useParams()
    
    useEffect(()=>{
        const dbFirestore     = getFirestore()
        const queryCollection = collection(dbFirestore, 'products') 
        
        if (cid) {
            // query con filtro
            const queryFilter     = query(queryCollection, where('category', '==', cid))
                
            
            getDocs(queryFilter)
            .then(res =>{ setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) )})
            .catch(err => console.log(err)) 
            .finally(() => setLoading(false))
            
        }else{
                       
            getDocs(queryCollection)
            .then(res => setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) ))
            .catch(err => console.log(err)) 
            .finally(() => setLoading(false))
        }
    }, [cid])

    // traer uno
    // useEffect(()=>{
    //     const dbFirestore = getFirestore()
    //     const queryDoc    = doc(dbFirestore, 'products', 'Mp3HMRxD68nWlauQkraH') 
    //     getDoc(queryDoc)
    //     .then(res => setProduct( { id: res.id , ...res.data() } ))
    //     .catch(err => console.log(err))
    // },[])

    // console.log(product)


    // traer muchos
    // useEffect(()=>{
    //     const dbFirestore     = getFirestore()
    //     const queryCollection = collection(dbFirestore, 'products') 
        
    //     getDocs(queryCollection)
    //     .then(res => setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) ))
    //     .catch(err => console.log(err)) 
    //     .finally(() => setLoading(false))
    // },[])
    // traer muchos filtrados
    // useEffect(()=>{
    //     const dbFirestore     = getFirestore()
    //     const queryCollection = collection(dbFirestore, 'products') 
    //     // query con filtro
    //     const queryFilter     = query(
    //         queryCollection, 
    //         where('price', '>=', 2500),
    //         // limit(1),
    //         orderBy('price', "desc")
    //     )
        
    //     getDocs(queryFilter)
    //     .then(res =>{ setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) )})
    //     .catch(err => console.log(err)) 
    //     .finally(() => setLoading(false))
    // },[])
    //traer muchos filtrados
    // useEffect(()=>{
    //     const dbFirestore     = getFirestore()
    //     const queryCollection = collection(dbFirestore, 'products') 
    //     // query con filtro
    //     const queryFilter     = query(queryCollection, where('category', '==', cid))
            
        
    //     getDocs(queryFilter)
    //     .then(res =>{ setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) )})
    //     .catch(err => console.log(err)) 
    //     .finally(() => setLoading(false))
    // },[])


    console.log(products)
    // () => {}
    const handleLiked = () => { 
        setLike(!like)
    }
    const handleAddProduct = () => { 
        setProducts([
            ...products,
            {id: products.length + 1, name: 'product ejemplo', price: 6000, stock: 99, category: 'remeras'}
        ])
    }

    // setProducts(prod)

    console.log('REnder itemlistcontainer')
    // condition ? : -> if else - if -> condition && '' - or condition || ''
    return (
        <>
            <button className="btn btn-primary" onClick={handleLiked}>Like</button>
            <button className="btn btn-primary" onClick={handleAddProduct}>Agregar productos</button>
            
            {   loading ? 
                    <Loading />
                :                   
                    <ItemList products={products } />
            }
           
        </>
    )
}

export default ItemListContainer