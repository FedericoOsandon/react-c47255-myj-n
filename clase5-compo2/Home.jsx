import { useEffect, useState } from "react"


const Home = ( { saludo } ) => {
    const [contador, setContador ] = useState(1)
    const [booleano, setBoleano ] = useState(true)

    // useEffect(()=>{// addEventlistner('evento', ()=>{}) // dom directamente
    //     console.log('addEvnetlistner()') // traer a los products (fetch) / 0 10 
    //     return () => {
    //         console.log('removeEventlistener()')
    //     }
    // })

    // useEffect(()=>{
    //     console.log('llamada a la api(una sola vez) 2 fetch') // traer a los products (fetch) / 0 10 
    // }, [])

    // useEffect(()=>{
    //     console.log('Solo cuando cambie lo que esta en el array de dependencias 3') // traer a los products (fetch) / 0 10 
    // // }, [props, estados])
    // }, [booleano, contador])

    const handleCounter = () => {        
        setContador(contador+1)
    }

    const handleBool = () => {
        setBoleano(!booleano)
    }
    // estados - llamados a las apis contenedores - solo lógica funcionamiento en compon contenoderes
    
   
    
    // console.log('render de home 4')
    return (
        <div>
            
            <p>{saludo}</p>
            
            <div>
                <p>{contador}</p>
                <button onClick={handleCounter}>click +</button>
            </div>
                <button onClick={handleBool}>Boleano</button>
        </div>
    )
}

export default Home