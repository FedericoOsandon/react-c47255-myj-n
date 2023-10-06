import { useState } from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'
import './App1.css'

// componentes funcionales -> muestran interfáz 
// componentes Contenedores -> agrupar otros contenedores o funcionales
// / useState ( hook - react ) -> función use reutrn array
function App() {
    const [counter, cambiarValorDeCounter] = useState(0)
    // console.log(estado)
    // let counter = 0

    const handleCounter = () => {
        // counter = counter + 1
        // // counter ++
        // counter += 1
        // console.log(counter)
        cambiarValorDeCounter(counter+1)
    }
    return ( 
        <>
            
            {/* { NavBar() } */}
            <NavBar />
            <Home saludo='hola como están' />
            <p>{counter}</p>
            <button onClick={handleCounter}>click +</button>
            
        </>
    )
}

export default App
