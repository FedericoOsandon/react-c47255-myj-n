import { useState } from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'
import './App1.css'

function App() {
    
    
    // console.log('Rendering app')
    return ( 
        <>
            
            
            <NavBar >               
            </NavBar>
                <Home saludo={'saludar'} />

            


            
        </>
    )
}

export default App

// Componentes son: 
    // FUnciones que comienzan con mayúscula y retorna jsx
    // pueden tener props: children y props comunes
    // estados -> producen un rerender
    // que hacían los eventos -> producen una nueva ejecución de la función donde están 
    // re render (una nueva ejecución de la función ) -> evento - cambio en el estado - cambio en la props

// Ciclo de vida: 
    // 1ra vez que se ejecuta un componente se llama montaje
    // actualizaciones nuevo render - re render
    // desmontaje