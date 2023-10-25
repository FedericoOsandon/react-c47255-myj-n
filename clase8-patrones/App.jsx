import NavBar from './components/NavBar/NavBar.jsx'
import ProdcutListContainer from './components/ItemListContainer/ItemListContainer'

import { ItemCounter } from './components/ItemCounter/ItemCounter.jsx';
import FormContainer from './components/FormContainer/FormContainer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

// useNombre= ()=>{} // custom hook
const onAdd = cant => {
    console.log('cantidad seleccionada: ', cant)
}

function App() {
    
    return ( 
        <>           
            <NavBar />
            <ProdcutListContainer greeting='saludo desde app, bienvenidos' /> 
            <ItemCounter initial={1} stock={5} onAdd={onAdd}/> 
            <FormContainer />            
        </>
    )
}

export default App
