// npm i react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetaliContainer } from './components/ItemDetailContainer/ItemDetaliContainer.jsx';
import { CartContextProvider } from './contexts/CartContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContainer } from './components/CartContainer/CartContainer.jsx';



function App() {
    // estado y funciones globales de cart context
    console.log('REnder app')
    return ( 
        // Todo el contexto para poder usar todas las herramientas de React-router-dom
        <CartContextProvider>
            <div>

                <Router>           
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting='saludo desde app, bienvenidos' /> } /> 
                        <Route path='/category/:cid' element={<ItemListContainer greeting='saludo desde app, bienvenidos' /> } /> 
                        <Route path='/detail/:pid' element={<ItemDetaliContainer /> } />
                        <Route path='/cart' element={<CartContainer /> } /> 

                        <Route path='*' element={<Navigate to='/' />} />                  
                    </Routes>
                </Router>
            </div>
        </CartContextProvider>
        
    )
}

export default App
