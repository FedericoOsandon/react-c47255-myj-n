import { useCartContext } from "../../contexts/CartContext"
import { doc, getDoc, getFirestore } from "firebase/firestore"


import {  useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetaliContainer = () => {
    const [ product, setProduct ] = useState({})
    const { pid } = useParams()
   

    // console.log(obj)
    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc    = doc(dbFirestore, 'products', pid) 
        getDoc(queryDoc)
        .then(res => setProduct( { id: res.id , ...res.data() } ))
        .catch(err => console.log(err))
    },[])

    
    return (
        <>            
            <ItemDetail product={product} />            
        </>
        
  )
}

