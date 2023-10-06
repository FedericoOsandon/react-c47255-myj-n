import Titulo from "../Titulo/Titulo"
import Formulario from '../Formulario/Formulario'

const Home = ( { saludo } ) => {
    // estados - llamados a las apis
    // NavBar(parametros)
    // props () puedo pasar datos de un componente padre a un componente hijo 
    const tituloApp = 'Este es un título de App'
    const subTituloApp = 'Este es un subtítulo de App'
   
    

    return (
        <div>
            <Titulo titulo={tituloApp} subTitulo={subTituloApp}/>
            <Formulario />
            <p>{saludo}</p>
        </div>
    )
}

export default Home