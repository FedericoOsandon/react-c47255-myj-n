import { useEffect, useRef, useState } from "react"

const ItemCount = ()=>{
    const [contador, setContador ] = useState(1)

    const renderCount = useRef(0)

    renderCount.current++

    const handleCounter = () => {        
        setContador(contador+1)
    }
    
    return  <div>
                <p>{contador}</p>
                <button onClick={handleCounter}>click +</button>
                <p>ESte componente Item Count se renderízo:  {renderCount.current} veces</p>
            </div>
}

const Home = ( { saludo } ) => {
    // usar librerías 
    const divRef = useRef(null)

    console.log(divRef)
    
    const handleClik = () => {
        divRef.current.innerText = 'nuevo contenido'
    }

    
    // get elementById -> div
   
    return (
        <div>
            
            <p>{saludo}</p>
            <ItemCount />
            {/* <div ref={divRef} >
                contenido original
            </div>
               <button onClick={handleClik}>cambio de contenido </button>  */}
                
        </div>
    )
}

export default Home