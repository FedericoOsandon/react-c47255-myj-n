import Titulo from "../Titulo/Titulo"

const Formulario = () => {
    const tituloForm='Este es titulo de formulario'
    // const subTituloForm
    return (
        <form>
            <Titulo titulo={tituloForm} subTitulo= 'subtitulo de formulario' />
            <input type='text' placeholder='ingrese el nombre' />
        </form>
    )
}

export default Formulario