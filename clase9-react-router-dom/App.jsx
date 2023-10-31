// npm i react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetaliContainer } from './components/ItemDetailContainer/ItemDetaliContainer.jsx';
import { CartContainer } from './components/CartContainer/CartContainer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    
    return ( 
        // Todo el contexto para poder usar todas las herramientas de React-router-dom
        <Router>           
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='saludo desde app, bienvenidos' /> } /> 
                <Route path='/category/:cid' element={<ItemListContainer greeting='saludo desde app, bienvenidos' /> } /> 
                <Route path='/detail/:pid' element={<ItemDetaliContainer /> } />
               

                <Route path='*' element={<Navigate to='/' />} />                  
            </Routes>
        </Router>
    )
}

export default App
